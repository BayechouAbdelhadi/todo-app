const formatDate=(timeZoneDate)=>{
    const date =new Date(timeZoneDate);
    return `à ${date.toLocaleTimeString()} le ${date.toLocaleDateString()} `
}

export {formatDate}