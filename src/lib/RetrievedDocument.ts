class RetrievedDocument {
  title: string;
  text: string;
  docid: string;

  constructor(
    title: string,
    text: string,
    docid: string,
  ) {
    this.title = title;
    this.text = text;
    this.docid = docid;
  }

  static parse(json: any): RetrievedDocument {
    return new RetrievedDocument(
      json.title || '',
      json.text || '',
      json.docid || '',
    );
  }

  static toJson(document: RetrievedDocument): any {
    return {
      title: document.title,
      text: document.text,
      docid: document.docid,
    };
  }
}

export default RetrievedDocument;