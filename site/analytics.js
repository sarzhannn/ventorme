// No provider, storage, identifiers, network requests or replay queue by default.
// An integration may explicitly register an adapter after its privacy review.
let adapter=null;
const events=new Set(['hero_problem_selected','quiz_started','quiz_step_completed','quiz_completed','result_viewed','registration_cta_clicked']);
const enums={
  locale:['ru','kz','en'],
  mode:['quiz','explore'],
  placement:['header','sticky','result','final','account','other'],
  status:['answered','skipped']
};
export function setAnalyticsAdapter(next) {
  if(next!==null&&typeof next!=='function')throw new TypeError('Expected a function or null');
  adapter=next;
}
export function trackEvent(name,properties={}) {
  if(!events.has(name))return false;
  const safe={};
  for(const [key,values] of Object.entries(enums))if(values.includes(properties[key]))safe[key]=properties[key];
  if(Number.isInteger(properties.step)&&properties.step>=1&&properties.step<=3)safe.step=properties.step;
  if(Number.isInteger(properties.count)&&properties.count>=0&&properties.count<=4)safe.count=properties.count;
  if(typeof properties.selected==='boolean')safe.selected=properties.selected;
  const event=Object.freeze({name,properties:Object.freeze(safe)});
  // Optional local debugging hook. No listener or remote collection is installed.
  if(typeof document!=='undefined')document.dispatchEvent(new CustomEvent('ventorme:funnel',{detail:event}));
  if(adapter)try { Promise.resolve(adapter(event)).catch(()=>{}); } catch { /* Never block navigation. */ }
  return true;
}
