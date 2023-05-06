
export function sortBy<T extends object>(array: T[], path: string, isDescend: boolean = false) {
    let properties: string[]  = path.split('.');
    
    array.sort((a, b) => {
        const left = properties.reduce((prev: any, curr) => prev?.[curr], a);
        const right = properties.reduce((prev: any, curr) => prev?.[curr], b);
        
        let result = 0;
        let sortModificator = isDescend ? -1 : 1;
        
        if(typeof left == 'string' && typeof right == 'string')
            result = left.localeCompare(right);
        else if(typeof left == 'number' && typeof right == 'number')
            result = left - right;
        else if(typeof left == 'boolean' && typeof right == 'boolean')
            result = left ? 1 : -1;
        
        return result * sortModificator;
    })
}