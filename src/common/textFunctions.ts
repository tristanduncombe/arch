export function Capitalise(inputStr: string){
    const str = inputStr.toLowerCase();
    return str.charAt(0).toUpperCase() + str.slice(1);
}