class Document {
    title: string;
    text: string;
    author: string;

    constructor(
        title: string,
        text: string,
        author: string
    ) {
        this.title = title;
        this.text = text;
        this.author = author;
    }

    static parse(json: any): Document {
        return new Document(
            json.title,
            json.text,
            json.author
        );
    }

    static to_json(document: Document): any {
        return {
            title: document.title,
            text: document.text,
            author: document.author
        };
    }
}

export default Document;