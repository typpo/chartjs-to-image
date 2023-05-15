declare class ChartJsImage {
  constructor(apiKey?: string, accountId?: string);

  setConfig(chartConfig: object): this;
  setWidth(width: number | string): this;
  setHeight(height: number | string): this;
  setBackgroundColor(color: string): this;
  setDevicePixelRatio(ratio: number | string): this;
  setFormat(fmt: string): this;
  setChartJsVersion(version: string): this;
  isValid(): boolean;
  getUrl(): string;
  getPostData(): {
    width: number;
    height: number;
    chart: string;
    format?: string;
    backgroundColor?: string;
    devicePixelRatio?: number;
    version?: string;
  };
  getShortUrl(): Promise<string>;
  toBinary(): Promise<Buffer>;
  toDataUrl(): Promise<string>;
  toFile(pathOrDescriptor: string): Promise<void>;
}

export = ChartJsImage;
