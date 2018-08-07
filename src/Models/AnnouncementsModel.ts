export class AnnouncementItem {
    url: string;
    title: string;
    tags: Array<CustomTags> = [];
}

class CustomTags {
    name: string;
    color: string;
}