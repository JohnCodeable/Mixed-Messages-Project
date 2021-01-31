let verbs, nouns, adjectives, adverbs, preposition;
nouns = ['cat', 'man', 'cow', 'monkey', 'baby', 'house', 'boy', 'girl'];
verbs = ['walked', 'ran', 'cried', 'slept', 'turned', 'rolled', 'jumped', 'fell', 'flew'];
adjectives = ['alive', 'careful', 'adventurous', 'clever', 'clean', 'courageous', 'glamorous', 'thoughtful'];
adverbs = ['extravagantly', 'slowly', 'quickly', 'shockingly', 'calmly', 'proudly', 'daily', 'lazily'];
preposition = ['despite', 'following', 'past', 'save', 'underneath', 'versus', 'off', 'near'];

let randomGen = () => {
    return Math.floor(Math.random() * 5);
}

let sentence = () => {
    let rand1 = Math.floor(Math.random() * 8);
    let rand2 = Math.floor(Math.random() * 8);
    let rand3 = Math.floor(Math.random() * 8);
    let rand4 = Math.floor(Math.random() * 8);
    let rand5 = Math.floor(Math.random() * 8);
    let rand6 = Math.floor(Math.random() * 8);

    let content = "The " + adjectives[rand1] + " " + nouns[rand2] + " " + adverbs[rand3] + " " + verbs[rand4] + " because some " + nouns[rand1] + " " + adverbs[rand1] + " " + verbs[rand1] + " " + preposition[rand1] + " a " + adjectives[rand2] + " " + nouns[rand5] + " which, became a " + adjectives[rand3] + ", " + adjectives[rand4] + " " + nouns[rand6] + ".";

    return content;
};

console.log(sentence());