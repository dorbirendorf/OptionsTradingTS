//Input types
export interface PutInputData {
    symbol:string,
    maxStrikePrice : number
}
export type OptionType = 'put' | 'call'


export interface OptionChainResponse {
    data?: {
        table?: {
            rows: any[];
        };
        lastTrade?: string;
    };
}

export interface OptionsChainQuote {
    rows:  OptionChainLink[];
    currentPrice: number
}

export interface OptionChainLink {
    strike?: string;
    p_Bid?: string;
    c_Bid?: string;
    expiryDate?: string;

}

export interface OptionAnalysisResult {
    ticker: string;
    currentPrice: number;
    strikePrice: number;
    expDateStr: string;
    expDate:Date,
    bid: number;
    percentageFromStrike: number;
    ROI: number;
}



