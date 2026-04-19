import * as brain from 'brain.js';
import { TrainingData, PredictionResult } from './types';

const config = {
    hiddenLayers: [10, 10],
    activation: 'sigmoid' as const
};

const net = new brain.recurrent.LSTM(config);

const data: TrainingData[] = [
    { input: "Market is growing fast", output: { positive: 1 } },
    { input: "Stocks are crashing down", output: { negative: 1 } },
    { input: "Neutral economic news", output: { neutral: 1 } }
];

console.log("Training model...");
net.train(data, {
    iterations: 100,
    errorThresh: 0.011,
    log: (stats) => console.log(stats)
});

export const classifyText = (text: string): string => {
    const output = net.run(text);
    return output;
};

const testMsg = "Market is bullish and growing";
console.log(`Input: ${testMsg} | Result: ${classifyText(testMsg)}`);
