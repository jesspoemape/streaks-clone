export default function iconFinder(name) {
    name = name.toLowerCase();
    switch(name) {
        case name.includes('cat'):
            return 'cat';
        case name.includes('dog'):
            return 'dog';
        case name.includes('hand' || 'finger'):
            return 'hand';
        case name.includes('foot' || 'feet' || 'walk' || 'run'):
            return 'feet';
        case name.includes('book' || 'read'):
            return 'book';
        case name.includes('tooth' || 'teeth' || 'floss'):
            return 'tooth';
        default:
            return 'star';
    }
}