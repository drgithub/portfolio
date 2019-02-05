import { Messages } from "./Messages";

export type Locale = {
    readonly  code    : string,
    readonly  name    : string,
    readonly  active  : boolean
}
export const Languages = {
   ceb: ()=> {return  {  code: "ceb",  name : "Cebuano",   active: true}},
   tl:  ()=> {return  {  code: "tl",   name : "Tagalog",   active: true  }},
   en:  ()=> {return  {  code: "en",   name : "English",   active: true  }},
   es:  ()=> {return  {  code: "es",   name : "Spanish",   active: false  }},
   de:  ()=> {return  {  code: "de",   name : "German",    active: false  }},
   cn:  ()=> {return  {  code: "cn",   name : "Chinese",   active: false  }}, 
   jpn: ()=> {return  {  code: "jpn",  name : "Japanese",  active: false  }}, 
   kor: ()=> {return  {  code: "kor",  name : "Korean",    active: false  }},
}

export var current: Locale, msg: Messages, basepath:string, pathname: string;
export const initLocale:(url:string, pathname:string, param?:string)=>void = (url,path,param) => {
    const alocale = Object.entries(Languages).find((value) => value[1]().active);
    const blocale = Object.entries(Languages).find((value) => value[1]().code === param && value[1]().active);
    const locale: Locale | undefined =  blocale && blocale[1]() || alocale && alocale[1]();
    const base  = `/${locale && locale.code}`;
    current     = Object.assign({},locale);
    msg         = Object.assign({},require('./'+ (locale && locale.code) +'/').get);
    basepath    = base;
    pathname    = path;
    console.log(basepath,'----',pathname,'----',current);
}

const getLink:(path: string, parameters?:{}) =>string = (path,parameters) => {
    var scratch:string = path;
    parameters && Object.entries(parameters).forEach((key)=>{
        scratch = scratch.replace(`:${key[0]}`, `${key[1]}`);
    });

    return basepath + scratch;
}

export const Paths = {
    home:       (params?:{}) =>   {return getLink('/',params)},
    blog:       (params?:{}) =>   {return getLink('/blog',params)},
    about:      (params?:{}) =>   {return getLink('/about',params)},
    contact:    (params?:{}) =>   {return getLink('/contact',params)},
    admin:      (params?:{}) =>   {return getLink('/admin',params)},
    // SPECIAL LINK FUNCTIONS (DO NOT USE FOR ROUTES)
    changelocale: (locale:Locale) => {
        const scratch:string[] = pathname.split('/');
        if(scratch[1].length <= 3){
           scratch[1] = scratch[1].replace(`${current.code}`,``); 
           scratch.shift();
        }
        return `/${locale.code}${scratch.join('/')}`
    },
}
