const s:string = "Hello kity"
const n:number = 20
const b:boolean = true

const b2:any = 6
const numb_arr:number[] = [10,15,20]
numb_arr.push(15)

const  str_arr:string[] = ["asd","ddd","www"]

const str_obj:Object[] = [{},{},{'name':'ss'}, new Object]

// FUNCTION
function test():void{

}

function sum(x:number,y:number):number{
    return x+y;
}



function getObject(name?:string):Object{
    if(name){
        return {
            name:name
        }
    }else{
        return null;
    }
}

function getNull():string{
    return null;
}

//Object
interface IWizard{
    age:number,
    name:string, 
    isStick:boolean,
    petName?:string
}

interface ISupperWizard extends IWizard{
    supperMagic?:Function
}

const Damboldor:ISupperWizard = {
    age:80,
    name:"Damboldor",
    isStick:true,
    supperMagic:function():void{
        console.log("BIG WATTER");
    }
}


const testObj:IWizard = {
    age:12,
    name:"Rohn",
    isStick:false,
    petName:"mouse"
}

const Hermiona:IWizard = {
    age:12,
    name:"Hermiona",
    isStick:true
}

