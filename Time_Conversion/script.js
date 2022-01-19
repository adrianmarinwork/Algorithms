function timeConversion(s) {
    
    if(s.includes('PM')) {
        if(s.substring(0, 2) === '12'){
            return s.substring(0, 8);
        }
        
        s = (parseInt(s.substring(0, 2)) + 12) + s.substring(2, 8);
        return s;
    }
    
    if(s.substring(0, 2) === '12'){
        s = '00' + s.substring(2, 8);
        return s;
    }
    
    return s.substring(0, 8);
}
