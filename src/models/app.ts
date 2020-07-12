import { Readable, writable, derived, Writable, readable, get } from 'svelte/store'



export type TNote = Writable<{ text: string, name: string, id: string }> & { tags(): string[] }
let cid = 0;
export function Note(name: string = "", text: string = "",): TNote {
    const wt = writable({ text, name, id: (++cid).toString() });
    return {
        ...wt, tags(): string[] {
            let t: string = get(wt).text;
            let res: string[] = [];
            t.replace(/@(\w+)/g, (v, a) => (res.push(a), ""));
            return res;
        }
    };
}

export const selected: Writable<TNote> = writable(Note());

export const all: Writable<TNote[]> = writable([
    Note("name", "text",),
    Note("name2", "text",),
]);