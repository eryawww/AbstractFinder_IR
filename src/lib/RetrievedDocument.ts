class RetrievedDocument {
  title: string;
  text: string;

  constructor(
    title: string,
    text: string,
  ) {
    this.title = title;
    this.text = text;
  }

  static parse(json: any): RetrievedDocument {
    return new RetrievedDocument(
      json.title || '',
      json.text || ''
    );
  }

  static toJson(document: RetrievedDocument): any {
    return {
      title: document.title,
      text: document.text
    };
  }
}

export default RetrievedDocument;