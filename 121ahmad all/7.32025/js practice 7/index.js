const EventEmitter = require('events');
const readline = require('readline');

class EventHandler extends EventEmitter {}
const eventHandler = new EventHandler();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Mouse Events
eventHandler.on('click', () => {
    console.log('Button color changed!');
});

eventHandler.on('dblclick', () => {
    console.log('Double-click detected! Showing message...');
});

eventHandler.on('mouseover', () => {
    console.log('Text highlighted on mouse over.');
});

eventHandler.on('mouseout', () => {
    console.log('Text color reset on mouse out.');
});

// Keyboard Events
rl.on('line', (input) => {
    console.log(`Key Pressed: ${input}`);
    eventHandler.emit('keydown', input);
    eventHandler.emit('keyup', input);
});

eventHandler.on('keyup', (input) => {
    console.log(`Uppercase: ${input.toUpperCase()}`);
});

// Form Events
eventHandler.on('focus', () => {
    console.log('Input field focused: Background color changed.');
});

eventHandler.on('blur', () => {
    console.log('Input field lost focus: Background color reset.');
});

eventHandler.on('change', (option) => {
    console.log(`Selected Option: ${option}`);
});

// Window & Document Events
setTimeout(() => {
    eventHandler.emit('load');
}, 1000);

eventHandler.on('load', () => {
    console.log('Welcome! Page has loaded.');
});

setInterval(() => {
    const width = Math.floor(Math.random() * 1000);
    const height = Math.floor(Math.random() * 1000);
    eventHandler.emit('resize', width, height);
}, 5000);

eventHandler.on('resize', (width, height) => {
    console.log(`Window resized: ${width}x${height}`);
});

setInterval(() => {
    const scrollY = Math.floor(Math.random() * 500);
    eventHandler.emit('scroll', scrollY);
}, 3000);

eventHandler.on('scroll', (scrollY) => {
    console.log(`Scroll Position: ${scrollY}`);
});

// Clipboard Events
eventHandler.on('copy', () => {
    console.log('Text copied! Alert displayed.');
});

eventHandler.on('paste', (e) => {
    console.log('Pasting is prevented.');
});

// Drag & Drop Events
eventHandler.on('dragstart', () => {
    console.log('Dragging started: Text changed.');
});

eventHandler.on('drop', () => {
    console.log('Element dropped: Moved to drop zone.');
});

console.log('Simulated JavaScript Events in Node.js. Type anything to simulate keypress.');
