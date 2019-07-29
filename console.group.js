//Visually groups messages together until console.groupEnd(label) is called. 
//Use console.groupCollapsed(label) to collapse the group when it's initially logged to the Console.
//console.clear();
let label = 'Adolescent Irradiated Espionage Tortoises';
console.group(label);
console.info('Leo');
console.info('Mike');
console.info('Don');
console.info('Raph');
console.groupEnd(label);
console.groupCollapsed(label);
console.info('Leo');
console.info('Mike');
console.info('Don');
console.info('Raph');
console.groupEnd(label);