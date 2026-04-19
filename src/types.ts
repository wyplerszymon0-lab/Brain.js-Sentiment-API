export interface TrainingData {
    input: string;
    output: { [key: string]: number };
}

export interface PredictionResult {
    label: string;
    confidence: number;
}
