export default function slugify(text: string) {
    text = text.toLowerCase();
    text = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    text = text.replace(/[^a-z0-9\s-]/g, "");
    text = text.trim().replace(/\s+/g, "-");
    return text;
}
