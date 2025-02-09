export interface EmojiData {
    code: string;
    emoji: string;
    number: number;
    name: string;
    category: string;
    subCategory: string;
    tags: string[];
    description: string;
}

export const EMOJIS: Record<string, EmojiData> = {
    "😀": {
        "code": "U+1F600",
        "emoji": "😀",
        "number": 1,
        "name": "grinning face",
        "category": "Smileys & Emotion",
        "subCategory": "face-smiling",
        "tags": ["smile", "happy", "joy", "face", "cheerful", "grin", "excitement", "positive", "emotion", "friendliness", "warmth", "laughter", "optimism", "playful", "fun", "delight", "content", "radiant", "expression", "yellow"],
        "description": "A classic yellow grinning face with wide-open eyes and a broad smile, symbolizing extreme happiness, positivity, or lightheartedness. Often used to express joy, laughter, or friendliness in casual conversations."
    },
    "😃": {
        "code": "U+1F603",
        "emoji": "😃",
        "number": 2,
        "name": "grinning face with big eyes",
        "category": "Smileys & Emotion",
        "subCategory": "face-smiling",
        "tags": ["excited", "enthusiasm", "surprise", "happy", "smile", "big eyes", "energy", "cheer", "eagerness", "amazement", "fun", "positive", "emotion", "expression", "laughter", "joyful", "playful", "delighted", "radiant", "yellow"],
        "description": "A grinning face with oversized, sparkling eyes and an open smile. Conveys excitement, eagerness, or pleasant surprise. Frequently used to amplify enthusiasm or react to thrilling news."
    },
    "😄": {
        "code": "U+1F604",
        "emoji": "😄",
        "number": 3,
        "name": "grinning face with smiling eyes",
        "category": "Smileys & Emotion",
        "subCategory": "face-smiling",
        "tags": ["warm", "content", "smiling eyes", "gentle", "satisfied", "friendly", "calm", "approachable", "kind", "bliss", "peaceful", "emotion", "joy", "grin", "cheerful", "relaxed", "sunny", "positive", "expression", "yellow"],
        "description": "A friendly face with a closed-mouth smile and crescent-shaped eyes, representing warm contentment or quiet happiness. Ideal for expressing gratitude, calm joy, or a subtle sense of humor."
    },
    "😁": {
        "code": "U+1F601",
        "emoji": "😁",
        "number": 4,
        "name": "beaming face with smiling eyes",
        "category": "Smileys & Emotion",
        "subCategory": "face-smiling",
        "tags": ["cheeky", "mischievous", "playful", "smirk", "blush", "prank", "jovial", "amused", "silly", "grin", "humor", "excitement", "energy", "fun", "lighthearted", "positive", "expression", "joyful", "radiant", "yellow"],
        "description": "A beaming face with raised eyebrows, smiling eyes, and a toothy grin, often with rosy cheeks. Suggests playful mischief, cheeky humor, or being pleasantly amused. Perfect for teasing or sharing lighthearted moments."
    },
    "😆": {
        "code": "U+1F606",
        "emoji": "😆",
        "number": 5,
        "name": "grinning squinting face",
        "category": "Smileys & Emotion",
        "subCategory": "face-smiling",
        "tags": ["laughing", "hilarious", "squinting", "tears", "funny", "humor", "jokes", "joy", "hysterical", "amused", "reaction", "comedy", "cackling", "positive", "emotion", "expression", "cheerful", "ecstatic", "overjoyed", "yellow"],
        "description": "A face laughing uncontrollably with eyes tightly closed and mouth wide open. Depicts hysterical laughter, often in response to something hilarious. Commonly used in memes or reactions to jokes."
    },
    "😅": {
        "code": "U+1F605",
        "emoji": "😅",
        "number": 6,
        "name": "grinning face with sweat",
        "category": "Smileys & Emotion",
        "subCategory": "face-smiling",
        "tags": ["nervous", "relief", "awkward", "embarrassed", "anxious", "stress", "close call", "phew", "flustered", "grin", "sweat drop", "tense", "awkward smile", "reassurance", "clumsy", "blush", "expression", "emotion", "yellow"],
        "description": "A grinning face with a visible sweat droplet, signaling nervous relief, mild embarrassment, or surviving a stressful situation. Often paired with messages like 'That was close!' or 'Phew!'"
    },
    "🤣": {
        "code": "U+1F923",
        "emoji": "🤣",
        "number": 7,
        "name": "rolling on the floor laughing",
        "category": "Smileys & Emotion",
        "subCategory": "face-smiling",
        "tags": ["ROFL", "hilarious", "floor", "laughing", "humor", "jokes", "funny", "tears", "crying", "hysterics", "comedy", "reaction", "meme", "epic", "uncontrollable", "emotion", "expression", "joy", "yellow"],
        "description": "A person laughing so hard they’re rolling on the floor (ROFL). Represents extreme, uncontrollable laughter, often in response to absurdly funny content. Popular in meme culture."
    },
    "😂": {
        "code": "U+1F602",
        "emoji": "😂",
        "number": 8,
        "name": "face with tears of joy",
        "category": "Smileys & Emotion",
        "subCategory": "face-smiling",
        "tags": ["tears", "crying", "laughing", "humor", "funny", "classic", "meme", "reaction", "joy", "hilarious", "popular", "emotion", "expression", "happy", "overwhelmed", "teardrops", "grin", "iconic", "yellow"],
        "description": "A face crying tears of joy, with a wide grin and closed eyes. One of the most popular emojis, used to express something is hilariously funny or overwhelmingly positive."
    },
    "🙂": {
        "code": "U+1F642",
        "emoji": "🙂",
        "number": 9,
        "name": "slightly smiling face",
        "category": "Smileys & Emotion",
        "subCategory": "face-smiling",
        "tags": ["polite", "subtle", "neutral", "calm", "friendly", "reserved", "mild", "agreeable", "awkward", "sarcasm", "passive", "soft", "modest", "emotion", "expression", "gentle", "composed", "unassuming", "yellow"],
        "description": "A subtle, slightly upturned smile with neutral eyes. Conveys polite agreement, mild satisfaction, or passive friendliness. Sometimes used sarcastically to mask true feelings."
    },
    "🙃": {
        "code": "U+1F643",
        "emoji": "🙃",
        "number": 10,
        "name": "upside-down face",
        "category": "Smileys & Emotion",
        "subCategory": "face-smiling",
        "tags": ["silly", "sarcasm", "absurd", "irony", "goofy", "playful", "joking", "weird", "humor", "strange", "flipped", "paradox", "confusion", "expression", "emotion", "quirky", "ridiculous", "yellow"],
        "description": "A face turned upside down, with a smile that becomes a frown when inverted. Used to express silliness, irony, or chaotic energy. Often paired with absurd or nonsensical statements."
    },
    "😉": {
        "code": "U+1F609",
        "emoji": "😉",
        "number": 11,
        "name": "winking face",
        "category": "Smileys & Emotion",
        "subCategory": "face-smiling",
        "tags": ["flirt", "joke", "hint", "secret", "teasing", "playful", "friendly", "mischief", "sly", "cheeky", "innuendo", "sarcasm", "expression", "emotion", "conniving", "scheming", "yellow"],
        "description": "A face winking with one eye and a slight smile. Suggests playful teasing, flirting, or sharing an inside joke. Can also imply sarcasm or a hidden meaning."
    },
    "😊": {
        "code": "U+1F60A",
        "emoji": "😊",
        "number": 12,
        "name": "smiling face with smiling eyes",
        "category": "Smileys & Emotion",
        "subCategory": "face-smiling",
        "tags": ["blush", "sweet", "kind", "grateful", "modest", "warm", "friendly", "affection", "humble", "gentle", "content", "joy", "emotion", "expression", "radiant", "positive", "yellow"],
        "description": "A warm, blushing face with closed smiling eyes. Radiates genuine kindness, gratitude, or bashful happiness. Often used to express heartfelt thanks or shy affection."
    },
    "😇": {
        "code": "U+1F607",
        "emoji": "😇",
        "number": 13,
        "name": "smiling face with halo",
        "category": "Smileys & Emotion",
        "subCategory": "face-smiling",
        "tags": ["angel", "innocent", "saint", "pure", "virtuous", "guilt", "sarcasm", "naive", "perfect", "heavenly", "blush", "emotion", "expression", "playful", "ironic", "yellow"],
        "description": "A smiling face with a halo above it, symbolizing angelic innocence or feigned virtue. Often used humorously to claim moral high ground or sarcastically after mischief."
    },
    "🥰": {
        "code": "U+1F970",
        "emoji": "🥰",
        "number": 14,
        "name": "smiling face with hearts",
        "category": "Smileys & Emotion",
        "subCategory": "face-affection",
        "tags": ["love", "adoration", "hearts", "affection", "crush", "romance", "infatuation", "bliss", "warmth", "grateful", "joyful", "smitten", "devotion", "enamored", "cherished", "flirty", "sweet", "emotional", "radiant", "yellow"],
        "description": "A smiling face surrounded by floating hearts, radiating love and adoration. Often used to express deep affection, gratitude, or being smitten with someone or something."
    },
    "😍": {
        "code": "U+1F60D",
        "emoji": "😍",
        "number": 15,
        "name": "smiling face with heart-eyes",
        "category": "Smileys & Emotion",
        "subCategory": "face-affection",
        "tags": ["infatuation", "attraction", "heart-eyes", "crush", "obsessed", "love-struck", "admiration", "beauty", "desire", "enamored", "awestruck", "charmed", "smitten", "passion", "fantasy", "expression", "emotion", "yellow"],
        "description": "A face with heart-shaped eyes and a bright smile, symbolizing intense admiration or infatuation. Perfect for reacting to something or someone irresistibly attractive."
    },
    "🤩": {
        "code": "U+1F929",
        "emoji": "🤩",
        "number": 16,
        "name": "star-struck",
        "category": "Smileys & Emotion",
        "subCategory": "face-affection",
        "tags": ["stars", "fame", "excitement", "celebrity", "awe", "fantasy", "glamour", "dreamy", "amazed", "dazzled", "obsessed", "fangirling", "admiration", "shining", "sparkle", "expression", "emotion", "yellow"],
        "description": "A face with starry eyes and a grin, representing being star-struck or dazzled. Often used for celebrity encounters, exciting achievements, or daydreaming about aspirations."
    },
    "😘": {
        "code": "U+1F618",
        "emoji": "😘",
        "number": 17,
        "name": "face blowing a kiss",
        "category": "Smileys & Emotion",
        "subCategory": "face-affection",
        "tags": ["kiss", "flirting", "romance", "love", "affection", "xoxo", "mwah", "smooch", "adoration", "sentimental", "fondness", "passion", "heart", "lips", "expression", "emotion", "yellow"],
        "description": "A face puckering its lips to blow a kiss, often accompanied by a heart. Symbolizes romantic affection, flirtation, or sending love to someone."
    },
    "😗": {
        "code": "U+1F617",
        "emoji": "😗",
        "number": 18,
        "name": "kissing face",
        "category": "Smileys & Emotion",
        "subCategory": "face-affection",
        "tags": ["neutral kiss", "casual", "platonic", "friendly", "subtle", "peck", "affection", "lips", "gentle", "soft", "calm", "unassuming", "expression", "emotion", "yellow"],
        "description": "A simple kissing face with neutral eyes and pursed lips. Represents a casual or platonic kiss, like a friendly peck or quiet affection."
    },
    "☺": {
        "code": "U+263A",
        "emoji": "☺",
        "number": 19,
        "name": "smiling face",
        "category": "Smileys & Emotion",
        "subCategory": "face-affection",
        "tags": ["classic", "warm", "vintage", "simple", "content", "peaceful", "gentle", "nostalgic", "retro", "soft", "smile", "innocent", "emotion", "expression", "yellow"],
        "description": "A retro-style smiling face with closed eyes and a curved mouth. Conveys quiet happiness, nostalgia, or a gentle, understated joy."
    },
    "😚": {
        "code": "U+1F61A",
        "emoji": "😚",
        "number": 20,
        "name": "kissing face with closed eyes",
        "category": "Smileys & Emotion",
        "subCategory": "face-affection",
        "tags": ["sincere", "romantic", "devoted", "affectionate", "intimate", "loving", "sentimental", "passionate", "heartfelt", "expression", "emotion", "yellow"],
        "description": "A face with closed eyes and puckered lips, symbolizing a heartfelt or romantic kiss. Often used to express deep love or gratitude."
    },
    "😙": {
        "code": "U+1F619",
        "emoji": "😙",
        "number": 21,
        "name": "kissing face with smiling eyes",
        "category": "Smileys & Emotion",
        "subCategory": "face-affection",
        "tags": ["cheerful", "playful", "friendly", "warm", "joyful", "lighthearted", "grin", "affection", "expression", "emotion", "yellow"],
        "description": "A kissing face with smiling eyes, blending affection and cheerfulness. Suggests a happy, playful kiss or warm appreciation."
    },
    "😋": {
        "code": "U+1F60B",
        "emoji": "😋",
        "number": 22,
        "name": "face savoring food",
        "category": "Smileys & Emotion",
        "subCategory": "face-tongue",
        "tags": ["yummy", "delicious", "tasty", "hungry", "foodie", "licking", "appetite", "craving", "yum", "savoring", "mouth-watering", "expression", "emotion", "yellow"],
        "description": "A face with its tongue out and eyes closed in bliss, relishing delicious food. Used to express hunger, craving, or enjoyment of a meal."
    },
    "😛": {
        "code": "U+1F61B",
        "emoji": "😛",
        "number": 23,
        "name": "face with tongue",
        "category": "Smileys & Emotion",
        "subCategory": "face-tongue",
        "tags": ["playful", "silly", "teasing", "joke", "childish", "goofy", "humor", "prank", "mockery", "taunting", "expression", "emotion", "yellow"],
        "description": "A face sticking out its tongue playfully, often to tease or joke. Conveys lighthearted mischief, silliness, or defiance."
    },
    "😜": {
        "code": "U+1F61C",
        "emoji": "😜",
        "number": 24,
        "name": "winking face with tongue",
        "category": "Smileys & Emotion",
        "subCategory": "face-tongue",
        "tags": ["sassy", "flirty", "joking", "humor", "cheeky", "mischief", "prank", "teasing", "sarcasm", "expression", "emotion", "yellow"],
        "description": "A winking face with its tongue out, combining humor and cheekiness. Ideal for sarcastic jokes, flirty banter, or playful rebellion."
    },
    "🤪": {
        "code": "U+1F92A",
        "emoji": "🤪",
        "number": 25,
        "name": "zany face",
        "category": "Smileys & Emotion",
        "subCategory": "face-tongue",
        "tags": ["crazy", "wild", "goofy", "unhinged", "chaos", "absurd", "madness", "eccentric", "meme", "expression", "emotion", "yellow"],
        "description": "A wild, cross-eyed face with a lolling tongue, depicting zany energy or absurdity. Represents goofy chaos, hyperactivity, or being 'extra' in a fun way."
    },
    "😝": {
        "code": "U+1F61D",
        "emoji": "😝",
        "number": 26,
        "name": "squinting face with tongue",
        "category": "Smileys & Emotion",
        "subCategory": "face-tongue",
        "tags": ["hilarious", "goofy", "laughter", "prank", "silly", "humor", "childish", "reaction", "expression", "emotion", "yellow"],
        "description": "A face squinting tightly with its tongue out, often after a prank or joke. Conveys playful mischief or laughing at oneself."
    },
    "🤑": {
        "code": "U+1F911",
        "emoji": "🤑",
        "number": 27,
        "name": "money-mouth face",
        "category": "Smileys & Emotion",
        "subCategory": "face-tongue",
        "tags": ["greed", "wealth", "money", "cash", "rich", "profit", "desire", "materialistic", "tongue", "dollar", "expression", "emotion", "yellow"],
        "description": "A face with dollar signs in its eyes and a tongue made of money. Represents greed, financial success, or craving wealth. Often used humorously about money-related wins."
    },
    "🤗": {
        "code": "U+1F917",
        "emoji": "🤗",
        "number": 28,
        "name": "hugging face",
        "category": "Smileys & Emotion",
        "subCategory": "face-hand",
        "tags": ["hug", "comfort", "support", "care", "affection", "warmth", "kindness", "friendship", "empathy", "reassurance", "love", "compassion", "soft", "gentle", "safe", "expression", "emotion", "yellow"],
        "description": "A smiling face with open hands, as if offering a hug. Symbolizes warmth, comfort, or virtual embrace. Often used to show support, gratitude, or platonic affection."
    },
    "🤭": {
        "code": "U+1F92D",
        "emoji": "🤭",
        "number": 29,
        "name": "face with hand over mouth",
        "category": "Smileys & Emotion",
        "subCategory": "face-hand",
        "tags": ["secret", "shock", "giggle", "surprise", "blush", "embarrassed", "whisper", "gossip", "muffled", "speechless", "awkward", "expression", "emotion", "yellow"],
        "description": "A face covering its mouth with a hand, suggesting suppressed laughter, secrecy, or mild shock. Often used to react to juicy gossip or a funny mishap."
    },
    "🤫": {
        "code": "U+1F92B",
        "emoji": "🤫",
        "number": 30,
        "name": "shushing face",
        "category": "Smileys & Emotion",
        "subCategory": "face-hand",
        "tags": ["quiet", "secret", "silence", "whisper", "sneaky", "stealth", "conspiracy", "hush", "discreet", "subtle", "expression", "emotion", "yellow"],
        "description": "A face with a finger over its lips, signaling secrecy or the need for silence. Used to imply confidentiality, stealth, or 'keep it quiet!'"
    },
    "🤔": {
        "code": "U+1F914",
        "emoji": "🤔",
        "number": 31,
        "name": "thinking face",
        "category": "Smileys & Emotion",
        "subCategory": "face-hand",
        "tags": ["ponder", "decide", "contemplate", "philosophy", "deep", "curious", "confused", "analyze", "meme", "expression", "emotion", "yellow"],
        "description": "A face with a hand on its chin, deep in thought. Represents contemplation, skepticism, or weighing options. Popular in memes about existential questions."
    },
    "🤐": {
        "code": "U+1F910",
        "emoji": "🤐",
        "number": 32,
        "name": "zipper-mouth face",
        "category": "Smileys & Emotion",
        "subCategory": "face-neutral-skeptical",
        "tags": ["silence", "secret", "censored", "muted", "restraint", "speechless", "refusal", "expression", "emotion", "yellow"],
        "description": "A face with a zipper over its mouth, symbolizing enforced silence or secrecy. Often used to indicate 'I can’t talk about this' or 'my lips are sealed.'"
    },
    "🤨": {
        "code": "U+1F928",
        "emoji": "🤨",
        "number": 33,
        "name": "face with raised eyebrow",
        "category": "Smileys & Emotion",
        "subCategory": "face-neutral-skeptical",
        "tags": ["skepticism", "doubt", "suspicion", "judge", "side-eye", "questioning", "disbelief", "expression", "emotion", "yellow"],
        "description": "A face with one raised eyebrow, conveying doubt, suspicion, or mild disapproval. Perfect for reacting to questionable claims or shady behavior."
    },
    "😐": {
        "code": "U+1F610",
        "emoji": "😐",
        "number": 34,
        "name": "neutral face",
        "category": "Smileys & Emotion",
        "subCategory": "face-neutral-skeptical",
        "tags": ["blank", "unimpressed", "indifferent", "apathetic", "bored", "straight-faced", "expressionless", "expression", "emotion", "yellow"],
        "description": "A completely neutral face with a straight mouth. Signals indifference, apathy, or a lack of strong feelings. Often used sarcastically."
    },
    "😑": {
        "code": "U+1F611",
        "emoji": "😑",
        "number": 35,
        "name": "expressionless face",
        "category": "Smileys & Emotion",
        "subCategory": "face-neutral-skeptical",
        "tags": ["deadpan", "unamused", "bored", "emotionless", "vacant", "detached", "flat", "expression", "emotion", "yellow"],
        "description": "A face with narrow eyes and a flat mouth, showing utter lack of emotion. Conveys irritation, boredom, or being unbothered."
    },
    "😶": {
        "code": "U+1F636",
        "emoji": "😶",
        "number": 36,
        "name": "face without mouth",
        "category": "Smileys & Emotion",
        "subCategory": "face-neutral-skeptical",
        "tags": ["speechless", "shocked", "silenced", "awkward", "muted", "confused", "expression", "emotion", "yellow"],
        "description": "A face with no mouth, representing speechlessness, shock, or deliberate silence. Used when words fail or to avoid commenting."
    },
    "😏": {
        "code": "U+1F60F",
        "emoji": "😏",
        "number": 37,
        "name": "smirking face",
        "category": "Smileys & Emotion",
        "subCategory": "face-neutral-skeptical",
        "tags": ["smug", "sly", "confident", "flirtatious", "sarcasm", "knowing", "mischief", "expression", "emotion", "yellow"],
        "description": "A face with a half-smile and raised eyebrow, radiating smugness or sly confidence. Often used for flirtation, sarcasm, or secretive humor."
    },
    "😒": {
        "code": "U+1F612",
        "emoji": "😒",
        "number": 38,
        "name": "unamused face",
        "category": "Smileys & Emotion",
        "subCategory": "face-neutral-skeptical",
        "tags": ["annoyed", "displeased", "irritated", "skeptical", "unimpressed", "eyeroll", "expression", "emotion", "yellow"],
        "description": "A face with a furrowed brow and downturned mouth, showing clear irritation or disapproval. Conveys 'really?' or 'I’m done with this.'"
    },
    "🙄": {
        "code": "U+1F644",
        "emoji": "🙄",
        "number": 39,
        "name": "face with rolling eyes",
        "category": "Smileys & Emotion",
        "subCategory": "face-neutral-skeptical",
        "tags": ["sarcasm", "exasperation", "disbelief", "judgment", "sass", "meme", "expression", "emotion", "yellow"],
        "description": "A face rolling its eyes upward, expressing exasperation, sarcasm, or dismissiveness. A universal reaction to absurdity or frustration."
    },
    "😬": {
        "code": "U+1F62C",
        "emoji": "😬",
        "number": 40,
        "name": "grimacing face",
        "category": "Smileys & Emotion",
        "subCategory": "face-neutral-skeptical",
        "tags": ["cringe", "awkward", "pain", "forced smile", "discomfort", "nervous", "expression", "emotion", "yellow"],
        "description": "A face with a tense, toothy grin and wide eyes. Represents discomfort, awkwardness, or enduring a cringeworthy situation."
    },
    "🤥": {
        "code": "U+1F925",
        "emoji": "🤥",
        "number": 41,
        "name": "lying face",
        "category": "Smileys & Emotion",
        "subCategory": "face-neutral-skeptical",
        "tags": ["pinocchio", "dishonest", "deceit", "fib", "guilt", "trick", "expression", "emotion", "yellow"],
        "description": "A face with an elongated nose (like Pinocchio), symbolizing lies or deceit. Used humorously to call out dishonesty or playful fibs."
    },
    "😌": {
        "code": "U+1F60C",
        "emoji": "😌",
        "number": 42,
        "name": "relieved face",
        "category": "Smileys & Emotion",
        "subCategory": "face-sleepy",
        "tags": ["peace", "calm", "relaxed", "grateful", "serene", "content", "post-stress", "expression", "emotion", "yellow"],
        "description": "A face with closed eyes and a gentle smile, exuding calm relief. Represents post-stress relaxation or quiet gratitude."
    },
    "😔": {
        "code": "U+1F614",
        "emoji": "😔",
        "number": 43,
        "name": "pensive face",
        "category": "Smileys & Emotion",
        "subCategory": "face-sleepy",
        "tags": ["sad", "regret", "melancholy", "remorse", "disappointed", "expression", "emotion", "yellow"],
        "description": "A face with downturned eyes and a frown, conveying pensiveness, regret, or mild sadness. Often used for introspective or somber moods."
    },
    "😪": {
        "code": "U+1F62A",
        "emoji": "😪",
        "number": 44,
        "name": "sleepy face",
        "category": "Smileys & Emotion",
        "subCategory": "face-sleepy",
        "tags": ["tired", "exhausted", "bored", "yawn", "drowsy", "expression", "emotion", "yellow"],
        "description": "A face with closed eyes, a tear, and a drooping mouth, symbolizing exhaustion or boredom. Represents needing rest or enduring monotony."
    },
    "🤤": {
        "code": "U+1F924",
        "emoji": "🤤",
        "number": 45,
        "name": "drooling face",
        "category": "Smileys & Emotion",
        "subCategory": "face-sleepy",
        "tags": ["hungry", "craving", "desire", "food", "lust", "obsession", "expression", "emotion", "yellow"],
        "description": "A face with drool dripping from its mouth, indicating intense craving (often for food) or infatuation. Used humorously for 'mouth-watering' moments."
    },
    "😴": {
        "code": "U+1F634",
        "emoji": "😴",
        "number": 46,
        "name": "sleeping face",
        "category": "Smileys & Emotion",
        "subCategory": "face-sleepy",
        "tags": ["asleep", "snore", "zzz", "rest", "nap", "boredom", "expression", "emotion", "yellow"],
        "description": "A face with closed eyes and a sleeping Zzz symbol. Represents deep sleep, boredom-induced drowsiness, or 'goodnight' messages."
    },
    "😷": {
        "code": "U+1F637",
        "emoji": "😷",
        "number": 47,
        "name": "face with medical mask",
        "category": "Smileys & Emotion",
        "subCategory": "face-unwell",
        "tags": ["sick", "health", "cold", "flu", "protection", "safety", "doctor", "hospital", "germs", "pandemic", "allergy", "infection", "precaution", "expression", "emotion", "yellow"],
        "description": "A face wearing a medical mask, symbolizing illness, protection from germs, or healthcare settings. Widely used during pandemics or to indicate caution."
    },
    "🤒": {
        "code": "U+1F912",
        "emoji": "🤒",
        "number": 48,
        "name": "face with thermometer",
        "category": "Smileys & Emotion",
        "subCategory": "face-unwell",
        "tags": ["fever", "sick", "thermometer", "illness", "flu", "infection", "bedridden", "chills", "weakness", "expression", "emotion", "yellow"],
        "description": "A face with a thermometer in its mouth and a furrowed brow, representing fever or sickness. Used to show feeling unwell or recovering."
    },
    "🤕": {
        "code": "U+1F915",
        "emoji": "🤕",
        "number": 49,
        "name": "face with head-bandage",
        "category": "Smileys & Emotion",
        "subCategory": "face-unwell",
        "tags": ["injured", "hurt", "accident", "recovery", "hospital", "pain", "bandage", "wound", "expression", "emotion", "yellow"],
        "description": "A face with a bandaged head, indicating injury, pain, or recovery. Often used metaphorically for emotional 'hurt' or setbacks."
    },
    "🤢": {
        "code": "U+1F922",
        "emoji": "🤢",
        "number": 50,
        "name": "nauseated face",
        "category": "Smileys & Emotion",
        "subCategory": "face-unwell",
        "tags": ["sick", "disgust", "grossed out", "queasy", "green", "ill", "food poisoning", "expression", "emotion", "yellow"],
        "description": "A green-tinted face with a twisted mouth, conveying nausea or disgust. Reacts to revolting smells, tastes, or situations."
    },
    "🤮": {
        "code": "U+1F92E",
        "emoji": "🤮",
        "number": 51,
        "name": "face vomiting",
        "category": "Smileys & Emotion",
        "subCategory": "face-unwell",
        "tags": ["puke", "sick", "gross", "disgust", "food poisoning", "exaggerated", "meme", "expression", "emotion", "yellow"],
        "description": "A face actively vomiting, depicting extreme sickness or disgust. Used humorously for over-the-top reactions to unpleasantness."
    },
    "🤧": {
        "code": "U+1F927",
        "emoji": "🤧",
        "number": 52,
        "name": "sneezing face",
        "category": "Smileys & Emotion",
        "subCategory": "face-unwell",
        "tags": ["allergies", "cold", "flu", "sneeze", "tissue", "achoo", "sick", "expression", "emotion", "yellow"],
        "description": "A face mid-sneeze with closed eyes and a tissue, representing allergies or a cold. Often paired with 'bless you!' messages."
    },
    "🥵": {
        "code": "U+1F975",
        "emoji": "🥵",
        "number": 53,
        "name": "⊛ hot face",
        "category": "Smileys & Emotion",
        "subCategory": "face-unwell",
        "tags": ["heat", "sweating", "fever", "spicy", "summer", "overheated", "blush", "flushed", "expression", "emotion", "red"],
        "description": "A red face with flames and sweat drops, symbolizing extreme heat, fever, or embarrassment. Also used for spicy food reactions."
    },
    "🥶": {
        "code": "U+1F976",
        "emoji": "🥶",
        "number": 54,
        "name": "⊛ cold face",
        "category": "Smileys & Emotion",
        "subCategory": "face-unwell",
        "tags": ["freezing", "winter", "shivering", "frostbite", "chilly", "ice", "blue", "expression", "emotion", "blue"],
        "description": "A blue-tinted face with icicles and frost, depicting extreme cold or numbness. Represents winter weather or feeling 'frozen' emotionally."
    },
    "🥴": {
        "code": "U+1F974",
        "emoji": "🥴",
        "number": 55,
        "name": "⊛ woozy face",
        "category": "Smileys & Emotion",
        "subCategory": "face-unwell",
        "tags": ["dizzy", "drunk", "confused", "tipsy", "spinning", "intoxicated", "groggy", "expression", "emotion", "yellow"],
        "description": "A face with uneven eyes and a crooked smile, representing dizziness, intoxication, or disorientation. Often used humorously for 'wild nights.'"
    },
    "😵": {
        "code": "U+1F635",
        "emoji": "😵",
        "number": 56,
        "name": "dizzy face",
        "category": "Smileys & Emotion",
        "subCategory": "face-unwell",
        "tags": ["confused", "spinning", "faint", "shock", "overwhelmed", "stars", "expression", "emotion", "yellow"],
        "description": "A face with X-shaped eyes and swirling stars, symbolizing dizziness, shock, or overwhelm. Used for literal or metaphorical 'head-spinning' moments."
    },
    "🤯": {
        "code": "U+1F92F",
        "emoji": "🤯",
        "number": 57,
        "name": "exploding head",
        "category": "Smileys & Emotion",
        "subCategory": "face-unwell",
        "tags": ["mind-blown", "shocked", "amazed", "epiphany", "overload", "meme", "expression", "emotion", "yellow"],
        "description": "A head exploding into pieces, representing astonishment, awe, or mental overload. Popular in memes for reactions to shocking news or ideas."
    },
    "🤠": {
        "code": "U+1F920",
        "emoji": "🤠",
        "number": 58,
        "name": "cowboy hat face",
        "category": "Smileys & Emotion",
        "subCategory": "face-hat",
        "tags": ["western", "yeehaw", "rodeo", "country", "texas", "southwest", "adventure", "expression", "emotion", "yellow"],
        "description": "A face wearing a cowboy hat, symbolizing Wild West culture, adventure, or country pride. Often used for playful 'yeehaw' energy."
    },
    "🥳": {
        "code": "U+1F973",
        "emoji": "🥳",
        "number": 59,
        "name": "⊛ partying face",
        "category": "Smileys & Emotion",
        "subCategory": "face-hat",
        "tags": ["celebrate", "birthday", "confetti", "festive", "party", "cheers", "expression", "emotion", "yellow"],
        "description": "A festive face with a party hat and confetti, representing celebrations, birthdays, or joyous occasions. Conveys excitement and festivity."
    },
    "😎": {
        "code": "U+1F60E",
        "emoji": "😎",
        "number": 60,
        "name": "smiling face with sunglasses",
        "category": "Smileys & Emotion",
        "subCategory": "face-glasses",
        "tags": ["cool", "chill", "summer", "swag", "relaxed", "confident", "expression", "emotion", "yellow"],
        "description": "A smiling face with sunglasses, radiating confidence, coolness, or laid-back vibes. Iconic for 'no worries' or sunny-day moods."
    },
    "🤓": {
        "code": "U+1F913",
        "emoji": "🤓",
        "number": 61,
        "name": "nerd face",
        "category": "Smileys & Emotion",
        "subCategory": "face-glasses",
        "tags": ["geek", "intellectual", "studious", "glasses", "books", "smart", "expression", "emotion", "yellow"],
        "description": "A face with oversized glasses and buck teeth, symbolizing nerdy enthusiasm, studiousness, or playful geek culture."
    },
    "🧐": {
        "code": "U+1F9D0",
        "emoji": "🧐",
        "number": 62,
        "name": "face with monocle",
        "category": "Smileys & Emotion",
        "subCategory": "face-glasses",
        "tags": ["curious", "detective", "inspect", "aristocratic", "judging", "mystery", "expression", "emotion", "yellow"],
        "description": "A face with a monocle and raised eyebrow, conveying scrutiny, curiosity, or aristocratic judgment. Often used for detective-themed humor."
    },
    "😕": {
        "code": "U+1F615",
        "emoji": "😕",
        "number": 63,
        "name": "confused face",
        "category": "Smileys & Emotion",
        "subCategory": "face-concerned",
        "tags": ["confusion", "uncertainty", "perplexed", "questioning", "lost", "unsure", "bewildered", "disoriented", "expression", "emotion", "yellow"],
        "description": "A face with a furrowed brow and downturned mouth, expressing confusion or mild distress. Used when puzzled by a situation or message."
    },
    "😟": {
        "code": "U+1F61F",
        "emoji": "😟",
        "number": 64,
        "name": "worried face",
        "category": "Smileys & Emotion",
        "subCategory": "face-concerned",
        "tags": ["anxiety", "concern", "unease", "nervous", "apprehension", "fear", "troubled", "expression", "emotion", "yellow"],
        "description": "A face with raised eyebrows and a frown, showing worry or anxiety. Conveys unease about potential problems or outcomes."
    },
    "🙁": {
        "code": "U+1F641",
        "emoji": "🙁",
        "number": 65,
        "name": "slightly frowning face",
        "category": "Smileys & Emotion",
        "subCategory": "face-concerned",
        "tags": ["disappointed", "melancholy", "dissatisfied", "unhappy", "downcast", "expression", "emotion", "yellow"],
        "description": "A face with a subtle frown and neutral eyes, indicating mild disappointment or subdued sadness."
    },
    "☹": {
        "code": "U+2639",
        "emoji": "☹",
        "number": 66,
        "name": "frowning face",
        "category": "Smileys & Emotion",
        "subCategory": "face-concerned",
        "tags": ["sad", "unhappy", "classic", "retro", "distressed", "expression", "emotion", "yellow"],
        "description": "A retro-style frowning face with downturned eyes, symbolizing clear unhappiness or sorrow."
    },
    "😮": {
        "code": "U+1F62E",
        "emoji": "😮",
        "number": 67,
        "name": "face with open mouth",
        "category": "Smileys & Emotion",
        "subCategory": "face-concerned",
        "tags": ["surprise", "shock", "gasp", "speechless", "amazed", "expression", "emotion", "yellow"],
        "description": "A face with wide-open eyes and mouth, expressing shock, awe, or astonishment."
    },
    "😯": {
        "code": "U+1F62F",
        "emoji": "😯",
        "number": 68,
        "name": "hushed face",
        "category": "Smileys & Emotion",
        "subCategory": "face-concerned",
        "tags": ["quiet", "silent", "shocked", "stunned", "speechless", "expression", "emotion", "yellow"],
        "description": "A face with wide eyes and a small, open mouth, conveying silent surprise or realization."
    },
    "😲": {
        "code": "U+1F632",
        "emoji": "😲",
        "number": 69,
        "name": "astonished face",
        "category": "Smileys & Emotion",
        "subCategory": "face-concerned",
        "tags": ["shocked", "amazed", "jaw-dropping", "stunned", "overwhelmed", "expression", "emotion", "yellow"],
        "description": "A face with bulging eyes and an open mouth, representing extreme shock or disbelief."
    },
    "😳": {
        "code": "U+1F633",
        "emoji": "😳",
        "number": 70,
        "name": "flushed face",
        "category": "Smileys & Emotion",
        "subCategory": "face-concerned",
        "tags": ["embarrassed", "blushing", "awkward", "shy", "flustered", "expression", "emotion", "red"],
        "description": "A red-faced emoji with wide eyes, signaling embarrassment, shyness, or being caught off guard."
    },
    "🥺": {
        "code": "U+1F97A",
        "emoji": "🥺",
        "number": 71,
        "name": "⊛ pleading face",
        "category": "Smileys & Emotion",
        "subCategory": "face-concerned",
        "tags": ["begging", "puppy eyes", "desperate", "innocent", "vulnerable", "expression", "emotion", "yellow"],
        "description": "A face with tearful eyes and clasped hands, conveying a plea for help, sympathy, or forgiveness."
    },
    "😦": {
        "code": "U+1F626",
        "emoji": "😦",
        "number": 72,
        "name": "frowning face with open mouth",
        "category": "Smileys & Emotion",
        "subCategory": "face-concerned",
        "tags": ["distress", "alarm", "grief", "anguish", "expression", "emotion", "yellow"],
        "description": "A face frowning deeply with an open mouth, expressing distress or despair."
    },
    "😧": {
        "code": "U+1F627",
        "emoji": "😧",
        "number": 73,
        "name": "anguished face",
        "category": "Smileys & Emotion",
        "subCategory": "face-concerned",
        "tags": ["pain", "torment", "suffering", "agony", "expression", "emotion", "yellow"],
        "description": "A face with a furrowed brow and open-mouthed scream, depicting intense emotional or physical pain."
    },
    "😨": {
        "code": "U+1F628",
        "emoji": "😨",
        "number": 74,
        "name": "fearful face",
        "category": "Smileys & Emotion",
        "subCategory": "face-concerned",
        "tags": ["scared", "terrified", "panic", "horror", "expression", "emotion", "yellow"],
        "description": "A face with wide, fearful eyes and a gaping mouth, representing terror or extreme anxiety."
    },
    "😰": {
        "code": "U+1F630",
        "emoji": "😰",
        "number": 75,
        "name": "anxious face with sweat",
        "category": "Smileys & Emotion",
        "subCategory": "face-concerned",
        "tags": ["stress", "nervous", "pressure", "worried", "sweat", "expression", "emotion", "yellow"],
        "description": "A face with a blue-tinted forehead and sweat drops, symbolizing anxiety or nervous tension."
    },
    "😥": {
        "code": "U+1F625",
        "emoji": "😥",
        "number": 76,
        "name": "sad but relieved face",
        "category": "Smileys & Emotion",
        "subCategory": "face-concerned",
        "tags": ["mixed emotions", "bittersweet", "tearful", "grateful", "expression", "emotion", "yellow"],
        "description": "A face with a tear and slight smile, depicting sadness tempered by relief or acceptance."
    },
    "😢": {
        "code": "U+1F622",
        "emoji": "😢",
        "number": 77,
        "name": "crying face",
        "category": "Smileys & Emotion",
        "subCategory": "face-concerned",
        "tags": ["tears", "sorrow", "heartbreak", "grief", "expression", "emotion", "yellow"],
        "description": "A face with a single tear, conveying quiet sadness, disappointment, or empathy."
    },
    "😭": {
        "code": "U+1F62D",
        "emoji": "😭",
        "number": 78,
        "name": "loudly crying face",
        "category": "Smileys & Emotion",
        "subCategory": "face-concerned",
        "tags": ["sobbing", "devastated", "heartbroken", "meltdown", "expression", "emotion", "yellow"],
        "description": "A face wailing with streams of tears, symbolizing intense grief, frustration, or overwhelming emotion."
    },
    "😱": {
        "code": "U+1F631",
        "emoji": "😱",
        "number": 79,
        "name": "face screaming in fear",
        "category": "Smileys & Emotion",
        "subCategory": "face-concerned",
        "tags": ["horror", "panic", "shock", "nightmare", "expression", "emotion", "yellow"],
        "description": "A face screaming with wide eyes and hands on cheeks, representing sheer terror or shock."
    },
    "😖": {
        "code": "U+1F616",
        "emoji": "😖",
        "number": 80,
        "name": "confounded face",
        "category": "Smileys & Emotion",
        "subCategory": "face-concerned",
        "tags": ["frustrated", "annoyed", "exasperated", "fed up", "expression", "emotion", "yellow"],
        "description": "A face with a twisted mouth and furrowed brow, showing frustration or irritation."
    },
    "😣": {
        "code": "U+1F623",
        "emoji": "😣",
        "number": 81,
        "name": "persevering face",
        "category": "Smileys & Emotion",
        "subCategory": "face-concerned",
        "tags": ["struggle", "endurance", "determined", "resilient", "expression", "emotion", "yellow"],
        "description": "A face with closed eyes and a tense frown, symbolizing determination through hardship."
    },
    "😞": {
        "code": "U+1F61E",
        "emoji": "😞",
        "number": 82,
        "name": "disappointed face",
        "category": "Smileys & Emotion",
        "subCategory": "face-concerned",
        "tags": ["let down", "sad", "regret", "unmet expectations", "expression", "emotion", "yellow"],
        "description": "A face with downturned eyes and a deep frown, expressing disappointment or regret."
    },
    "😓": {
        "code": "U+1F613",
        "emoji": "😓",
        "number": 83,
        "name": "downcast face with sweat",
        "category": "Smileys & Emotion",
        "subCategory": "face-concerned",
        "tags": ["stress", "exhaustion", "overwhelmed", "pressure", "expression", "emotion", "yellow"],
        "description": "A face with sweat drops and a resigned expression, symbolizing stress or mental fatigue."
    },
    "😩": {
        "code": "U+1F629",
        "emoji": "😩",
        "number": 84,
        "name": "weary face",
        "category": "Smileys & Emotion",
        "subCategory": "face-concerned",
        "tags": ["exhausted", "drained", "burnout", "frustrated", "expression", "emotion", "yellow"],
        "description": "A face with closed eyes and a deep frown, conveying extreme exhaustion or exasperation."
    },
    "😫": {
        "code": "U+1F62B",
        "emoji": "😫",
        "number": 85,
        "name": "tired face",
        "category": "Smileys & Emotion",
        "subCategory": "face-concerned",
        "tags": ["sleepy", "fatigued", "overworked", "drained", "expression", "emotion", "yellow"],
        "description": "A face with furrowed brows and an open-mouthed frown, depicting physical or mental tiredness."
    },
    "😤": {
        "code": "U+1F624",
        "emoji": "😤",
        "number": 86,
        "name": "face with steam from nose",
        "category": "Smileys & Emotion",
        "subCategory": "face-negative",
        "tags": ["fuming", "angry", "determined", "competitive", "expression", "emotion", "yellow"],
        "description": "A face with steam blowing from its nose, symbolizing determination or suppressed anger."
    },
    "😡": {
        "code": "U+1F621",
        "emoji": "😡",
        "number": 87,
        "name": "pouting face",
        "category": "Smileys & Emotion",
        "subCategory": "face-negative",
        "tags": ["rage", "furious", "outraged", "livid", "expression", "emotion", "red"],
        "description": "A red-faced emoji with a deep frown and furrowed brows, representing intense anger or fury."
    },
    "😠": {
        "code": "U+1F620",
        "emoji": "😠",
        "number": 88,
        "name": "angry face",
        "category": "Smileys & Emotion",
        "subCategory": "face-negative",
        "tags": ["irritated", "annoyed", "frustrated", "mad", "expression", "emotion", "red"],
        "description": "A face with a scowling expression and narrowed eyes, showing clear irritation or displeasure."
    },
    "🤬": {
        "code": "U+1F92C",
        "emoji": "🤬",
        "number": 89,
        "name": "face with symbols on mouth",
        "category": "Smileys & Emotion",
        "subCategory": "face-negative",
        "tags": ["censored", "swearing", "profanity", "outrage", "expression", "emotion", "red"],
        "description": "A face with symbols covering its mouth, implying cursing or being censored. Represents extreme anger or vulgarity."
    },
    "😈": {
        "code": "U+1F608",
        "emoji": "😈",
        "number": 90,
        "name": "smiling face with horns",
        "category": "Smileys & Emotion",
        "subCategory": "face-negative",
        "tags": ["devilish", "mischievous", "evil", "temptation", "expression", "emotion", "purple"],
        "description": "A smirking face with horns, symbolizing mischief, playful evil, or devilish humor."
    },
    "👿": {
        "code": "U+1F47F",
        "emoji": "👿",
        "number": 91,
        "name": "angry face with horns",
        "category": "Smileys & Emotion",
        "subCategory": "face-negative",
        "tags": ["demon", "rage", "evil", "vengeful", "expression", "emotion", "red"],
        "description": "A furious red-faced demon with horns, representing wrath, vengeance, or malevolence."
    },
    "💀": {
        "code": "U+1F480",
        "emoji": "💀",
        "number": 92,
        "name": "skull",
        "category": "Smileys & Emotion",
        "subCategory": "face-negative",
        "tags": ["death", "danger", "poison", "morbid", "expression", "emotion", "white"],
        "description": "A human skull, symbolizing death, danger, or dark humor. Often used in Halloween contexts."
    },
    "☠": {
        "code": "U+2620",
        "emoji": "☠",
        "number": 93,
        "name": "skull and crossbones",
        "category": "Smileys & Emotion",
        "subCategory": "face-negative",
        "tags": ["poison", "pirate", "danger", "toxic", "expression", "emotion", "white"],
        "description": "A skull with crossed bones, representing poison, piracy, or lethal danger."
    },
    "💩": {
        "code": "U+1F4A9",
        "emoji": "💩",
        "number": 94,
        "name": "pile of poo",
        "category": "Smileys & Emotion",
        "subCategory": "face-costume",
        "tags": ["poop", "humor", "gross", "silly", "meme", "absurd", "childish", "playful", "bathroom", "expression", "emotion", "brown"],
        "description": "A cartoonish brown pile of feces with a smiling face. Used humorously to represent something silly, gross, or absurd. Popular in meme culture."
    },
    "🤡": {
        "code": "U+1F921",
        "emoji": "🤡",
        "number": 95,
        "name": "clown face",
        "category": "Smileys & Emotion",
        "subCategory": "face-costume",
        "tags": ["circus", "joker", "creepy", "comedy", "prank", "scary", "halloween", "expression", "emotion", "colorful"],
        "description": "A clown face with exaggerated features, representing humor, mischief, or eerie vibes. Often used in jokes or spooky contexts."
    },
    "👹": {
        "code": "U+1F479",
        "emoji": "👹",
        "number": 96,
        "name": "ogre",
        "category": "Smileys & Emotion",
        "subCategory": "face-costume",
        "tags": ["monster", "japanese", "folklore", "demon", "oni", "scary", "myth", "expression", "emotion", "red"],
        "description": "A red ogre (Japanese *oni*) with horns and fierce teeth. Represents mythical monsters, danger, or traditional folklore."
    },
    "👺": {
        "code": "U+1F47A",
        "emoji": "👺",
        "number": 97,
        "name": "goblin",
        "category": "Smileys & Emotion",
        "subCategory": "face-costume",
        "tags": ["trickster", "mischief", "folklore", "evil", "monster", "expression", "emotion", "blue"],
        "description": "A blue goblin (Japanese *tengu*) with a long nose. Symbolizes trickery, mischief, or malevolent spirits in folklore."
    },
    "👻": {
        "code": "U+1F47B",
        "emoji": "👻",
        "number": 98,
        "name": "ghost",
        "category": "Smileys & Emotion",
        "subCategory": "face-costume",
        "tags": ["spooky", "halloween", "boo", "scary", "cute", "playful", "spirit", "expression", "emotion", "white"],
        "description": "A friendly white ghost, often used for Halloween, playful scares, or cute supernatural themes."
    },
    "👽": {
        "code": "U+1F47D",
        "emoji": "👽",
        "number": 99,
        "name": "alien",
        "category": "Smileys & Emotion",
        "subCategory": "face-costume",
        "tags": ["extraterrestrial", "ufo", "scifi", "space", "mystery", "weird", "expression", "emotion", "gray"],
        "description": "A gray alien with large black eyes, symbolizing extraterrestrial life, sci-fi, or conspiracy theories."
    },
    "👾": {
        "code": "U+1F47E",
        "emoji": "👾",
        "number": 100,
        "name": "alien monster",
        "category": "Smileys & Emotion",
        "subCategory": "face-costume",
        "tags": ["space invader", "arcade", "retro", "game", "pixel", "expression", "emotion", "purple"],
        "description": "A pixelated purple alien monster, inspired by classic arcade games. Represents retro gaming or digital chaos."
    },
    "🤖": {
        "code": "U+1F916",
        "emoji": "🤖",
        "number": 101,
        "name": "robot",
        "category": "Smileys & Emotion",
        "subCategory": "face-costume",
        "tags": ["android", "technology", "ai", "future", "mechanical", "expression", "emotion", "silver"],
        "description": "A metallic robot face, symbolizing technology, artificial intelligence, or futuristic themes."
    },
    "😺": {
        "code": "U+1F63A",
        "emoji": "😺",
        "number": 102,
        "name": "grinning cat",
        "category": "Smileys & Emotion",
        "subCategory": "cat-face",
        "tags": ["happy", "kitty", "playful", "joyful", "pet", "meow", "expression", "emotion", "yellow"],
        "description": "A grinning cat face with wide-open eyes and a toothy smile. Conveys feline excitement or mischief."
    },
    "😸": {
        "code": "U+1F638",
        "emoji": "😸",
        "number": 103,
        "name": "grinning cat with smiling eyes",
        "category": "Smileys & Emotion",
        "subCategory": "cat-face",
        "tags": ["cheerful", "content", "purr", "cute", "pet", "expression", "emotion", "yellow"],
        "description": "A grinning cat with crescent-shaped eyes, radiating calm happiness or satisfaction."
    },
    "😹": {
        "code": "U+1F639",
        "emoji": "😹",
        "number": 104,
        "name": "cat with tears of joy",
        "category": "Smileys & Emotion",
        "subCategory": "cat-face",
        "tags": ["laughing", "funny", "hilarious", "meme", "tears", "expression", "emotion", "yellow"],
        "description": "A cat laughing so hard it cries, symbolizing extreme humor or absurdity. Popular in cat-themed memes."
    },
    "😻": {
        "code": "U+1F63B",
        "emoji": "😻",
        "number": 105,
        "name": "smiling cat with heart-eyes",
        "category": "Smileys & Emotion",
        "subCategory": "cat-face",
        "tags": ["love", "adorable", "crush", "infatuation", "cute", "expression", "emotion", "yellow"],
        "description": "A cat with heart-shaped eyes, expressing adoration or obsession with something irresistibly cute."
    },
    "😼": {
        "code": "U+1F63C",
        "emoji": "😼",
        "number": 106,
        "name": "cat with wry smile",
        "category": "Smileys & Emotion",
        "subCategory": "cat-face",
        "tags": ["sarcasm", "smug", "sly", "mischievous", "cheeky", "expression", "emotion", "yellow"],
        "description": "A cat with a lopsided grin, conveying playful sarcasm, smugness, or secretive humor."
    },
    "😽": {
        "code": "U+1F63D",
        "emoji": "😽",
        "number": 107,
        "name": "kissing cat",
        "category": "Smileys & Emotion",
        "subCategory": "cat-face",
        "tags": ["affection", "love", "purr", "xoxo", "pet", "expression", "emotion", "yellow"],
        "description": "A cat puckering its lips for a kiss, symbolizing feline affection or playful flirting."
    },
    "🙀": {
        "code": "U+1F640",
        "emoji": "🙀",
        "number": 108,
        "name": "weary cat",
        "category": "Smileys & Emotion",
        "subCategory": "cat-face",
        "tags": ["shocked", "surprised", "scared", "exhausted", "meme", "expression", "emotion", "yellow"],
        "description": "A cat with wide eyes and an open mouth, depicting shock, fear, or exaggerated exhaustion."
    },
    "😿": {
        "code": "U+1F63F",
        "emoji": "😿",
        "number": 109,
        "name": "crying cat",
        "category": "Smileys & Emotion",
        "subCategory": "cat-face",
        "tags": ["sad", "tearful", "heartbroken", "grieving", "pet", "expression", "emotion", "yellow"],
        "description": "A crying cat with a tear, expressing sadness, loss, or empathy. Often used for dramatic effect."
    },
    "😾": {
        "code": "U+1F63E",
        "emoji": "😾",
        "number": 110,
        "name": "pouting cat",
        "category": "Smileys & Emotion",
        "subCategory": "cat-face",
        "tags": ["angry", "grumpy", "irritated", "displeased", "pet", "expression", "emotion", "yellow"],
        "description": "A cat with a deep frown and narrowed eyes, symbolizing feline anger or stubbornness."
    },
    "🙈": {
        "code": "U+1F648",
        "emoji": "🙈",
        "number": 111,
        "name": "see-no-evil monkey",
        "category": "Smileys & Emotion",
        "subCategory": "monkey-face",
        "tags": ["ignore", "avoid", "embarrassed", "playful", "proverb", "expression", "emotion", "brown"],
        "description": "A monkey covering its eyes, representing the proverb 'See no evil.' Used to humorously avoid awkward truths."
    },
    "🙉": {
        "code": "U+1F649",
        "emoji": "🙉",
        "number": 112,
        "name": "hear-no-evil monkey",
        "category": "Smileys & Emotion",
        "subCategory": "monkey-face",
        "tags": ["ignore", "deaf", "denial", "playful", "proverb", "expression", "emotion", "brown"],
        "description": "A monkey covering its ears, symbolizing 'Hear no evil.' Implies ignoring gossip or unpleasant news."
    },
    "🙊": {
        "code": "U+1F64A",
        "emoji": "🙊",
        "number": 113,
        "name": "speak-no-evil monkey",
        "category": "Smileys & Emotion",
        "subCategory": "monkey-face",
        "tags": ["secret", "silent", "censor", "playful", "proverb", "expression", "emotion", "brown"],
        "description": "A monkey covering its mouth, representing 'Speak no evil.' Used to indicate secrecy or withholding opinions."
    },
    "💋": {
        code: "U+1F48B",
        emoji: "💋",
        number: 114,
        name: "kiss mark",
        category: "Smileys & Emotion",
        subCategory: "emotion",
        tags: ["kiss", "love", "affection", "lips", "romance", "passion", "xoxo", "smooch", "seal", "mark", "symbol", "flirt", "relationship", "valentine", "lipstick", "desire", "fondness", "sentimental", "gesture", "symbolic"],
        description: "A lipstick kiss mark, symbolizing love, passion, or affection. Often used to represent a romantic gesture or seal a message with a kiss."
    },
    "💌": {
        code: "U+1F48C",
        emoji: "💌",
        number: 115,
        name: "love letter",
        category: "Smileys & Emotion",
        subCategory: "emotion",
        tags: ["romance", "valentine", "envelope", "message", "crush", "secret admirer", "vintage", "poetic", "nostalgia", "heart", "mail", "affection", "sentiment", "confession", "expression", "charm", "delivery", "emotional", "symbol"],
        description: "A folded love letter with a heart seal, representing romantic messages, secret crushes, or nostalgic affection."
    },
    "💘": {
        code: "U+1F498",
        emoji: "💘",
        number: 116,
        name: "heart with arrow",
        category: "Smileys & Emotion",
        subCategory: "emotion",
        tags: ["cupid", "valentine", "romance", "crush", "desire", "love at first sight", "target", "aim", "infatuation", "symbol", "passion", "arrow", "flame", "adoration", "obsession", "yearning", "matchmaking", "emotional"],
        description: "A heart pierced by an arrow, symbolizing romantic love or being struck by Cupid’s bow. Often used for crushes or Valentine’s Day."
    },
    "💝": {
        code: "U+1F49D",
        emoji: "💝",
        number: 117,
        name: "heart with ribbon",
        category: "Smileys & Emotion",
        subCategory: "emotion",
        tags: ["gift", "valentine", "present", "chocolate", "bow", "celebration", "anniversary", "adorned", "decoration", "cherish", "affection", "adorning", "festive", "sentimental", "romantic", "symbol"],
        description: "A heart tied with a ribbon, often representing a gift of love, such as Valentine’s chocolates or a cherished present."
    },
    "💖": {
        code: "U+1F496",
        emoji: "💖",
        number: 118,
        name: "sparkling heart",
        category: "Smileys & Emotion",
        subCategory: "emotion",
        tags: ["glitter", "excitement", "joy", "magical", "admiration", "infatuation", "glow", "twinkle", "enchantment", "fascination", "sparkle", "affection", "glimmer", "radiant", "dazzling", "emotional"],
        description: "A pink heart surrounded by sparkles, conveying excitement, enchantment, or starry-eyed admiration."
    },
    "💗": {
        code: "U+1F497",
        emoji: "💗",
        number: 119,
        name: "growing heart",
        category: "Smileys & Emotion",
        subCategory: "emotion",
        tags: ["pulsing", "expanding", "developing love", "infatuation", "blossoming", "heartbeat", "throbbing", "affection", "increase", "emotion", "rhythm", "life", "vitality", "symbol"],
        description: "A heart that appears to be growing or pulsating, symbolizing developing feelings, blossoming love, or increasing affection."
    },
    "💓": {
        code: "U+1F493",
        emoji: "💓",
        number: 120,
        name: "beating heart",
        category: "Smileys & Emotion",
        subCategory: "emotion",
        tags: ["heartbeat", "alive", "life", "vitality", "passion", "rhythm", "pulse", "throb", "excitement", "animation", "emotion", "symbol"],
        description: "A heart with motion lines, representing a heartbeat. Conveys being alive with love, excitement, or nervous anticipation."
    },
    "💞": {
        code: "U+1F49E",
        emoji: "💞",
        number: 121,
        name: "revolving hearts",
        category: "Smileys & Emotion",
        subCategory: "emotion",
        tags: ["whirl", "spin", "mutual love", "harmony", "balance", "connection", "couple", "dance", "romance", "infinity", "eternity", "symbol"],
        description: "Two hearts swirling around each other, symbolizing mutual affection, harmony, or a timeless romantic bond."
    },
    "💕": {
        code: "U+1F495",
        emoji: "💕",
        number: 122,
        name: "two hearts",
        category: "Smileys & Emotion",
        subCategory: "emotion",
        tags: ["love", "couple", "pair", "relationship", "affection", "unity", "bond", "togetherness", "romance", "connection", "symbol"],
        description: "Two pink hearts side by side, representing mutual love, partnership, or deep emotional connection."
    },
    "💟": {
        code: "U+1F49F",
        emoji: "💟",
        number: 123,
        name: "heart decoration",
        category: "Smileys & Emotion",
        subCategory: "emotion",
        tags: ["ornament", "design", "art", "symbol", "flourish", "embellishment", "style", "decorative", "aesthetic", "charm", "adornment", "vintage"],
        description: "A heart-shaped decorative symbol, often used in design or art to add a romantic or charming flourish."
    },
    "❣": {
        code: "U+2763",
        emoji: "❣",
        number: 124,
        name: "heart exclamation",
        category: "Smileys & Emotion",
        subCategory: "emotion",
        tags: ["emphasis", "passion", "drama", "punctuation", "symbol", "intensity", "excitement", "statement", "bold", "emotional"],
        description: "A heart-shaped exclamation mark, adding dramatic emphasis to messages of love, gratitude, or excitement."
    },
    "💔": {
        code: "U+1F494",
        emoji: "💔",
        number: 125,
        name: "broken heart",
        category: "Smileys & Emotion",
        subCategory: "emotion",
        tags: ["heartbreak", "sorrow", "loss", "pain", "split", "grief", "rejection", "sadness", "ended", "emotional", "symbol"],
        description: "A red heart split in two, symbolizing emotional pain, breakup, or unrequited love."
    },
    "❤": {
        code: "U+2764",
        emoji: "❤",
        number: 126,
        name: "red heart",
        category: "Smileys & Emotion",
        subCategory: "emotion",
        tags: ["love", "passion", "romance", "affection", "devotion", "care", "symbol", "classic", "universal", "life", "vitality"],
        description: "A classic red heart, universally symbolizing deep love, passion, and emotional connection."
    },
    "🧡": {
        code: "U+1F9E1",
        emoji: "🧡",
        number: 127,
        name: "orange heart",
        category: "Smileys & Emotion",
        subCategory: "emotion",
        tags: ["warmth", "friendship", "autumn", "gratitude", "support", "creativity", "energy", "symbol", "unique", "emotional"],
        description: "An orange heart representing warmth, friendship, or autumn. Often used for supportive or platonic bonds."
    },
    "💛": {
        code: "U+1F49B",
        emoji: "💛",
        number: 128,
        name: "yellow heart",
        category: "Smileys & Emotion",
        subCategory: "emotion",
        tags: ["joy", "friendship", "happiness", "positivity", "optimism", "sunshine", "cheer", "closeness", "symbol", "emotional"],
        description: "A yellow heart symbolizing joy, friendship, or sunny optimism. Conveys lighthearted affection or support."
    },
    "💚": {
        code: "U+1F49A",
        emoji: "💚",
        number: 129,
        name: "green heart",
        category: "Smileys & Emotion",
        subCategory: "emotion",
        tags: ["nature", "growth", "jealousy", "environment", "renewal", "health", "support", "symbol", "emotional"],
        description: "A green heart linked to nature, growth, or envy. Also used for environmental causes or fresh beginnings."
    },
    "💙": {
        code: "U+1F499",
        emoji: "💙",
        number: 130,
        name: "blue heart",
        category: "Smileys & Emotion",
        subCategory: "emotion",
        tags: ["trust", "calm", "peace", "loyalty", "serenity", "solidarity", "support", "symbol", "emotional"],
        description: "A blue heart symbolizing trust, tranquility, or solidarity. Often used for mental health awareness or loyalty."
    },
    "💜": {
        code: "U+1F49C",
        emoji: "💜",
        number: 131,
        name: "purple heart",
        category: "Smileys & Emotion",
        subCategory: "emotion",
        tags: ["compassion", "spirituality", "luxury", "epilepsy awareness", "nobility", "wisdom", "symbol", "emotional"],
        description: "A purple heart representing compassion, spirituality, or support for epilepsy awareness. Conveys dignity and grace."
    },
    "🖤": {
        code: "U+1F5A4",
        emoji: "🖤",
        number: 132,
        name: "black heart",
        category: "Smileys & Emotion",
        subCategory: "emotion",
        tags: ["dark", "sorrow", "edgy", "gothic", "mourning", "rebellion", "humor", "symbol", "emotional"],
        description: "A black heart symbolizing dark humor, grief, or edgy aesthetics. Often used in alternative or melancholic contexts."
    },
    "💯": {
        code: "U+1F4AF",
        emoji: "💯",
        number: 133,
        name: "hundred points",
        category: "Smileys & Emotion",
        subCategory: "emotion",
        tags: ["perfect", "score", "excellence", "achievement", "full marks", "success", "approval", "top", "best", "symbol"],
        description: "A red '100' score, symbolizing perfection, excellence, or full approval. Used to celebrate top-tier efforts or results."
    },
    "💢": {
        code: "U+1F4A2",
        emoji: "💢",
        number: 134,
        name: "anger symbol",
        category: "Smileys & Emotion",
        subCategory: "emotion",
        tags: ["anger", "frustration", "mad", "manga", "steam", "vent", "irritation", "rage", "symbol", "emotion"],
        description: "A spiral anger symbol from manga, representing frustration, irritation, or venting steam."
    },
    "💥": {
        code: "U+1F4A5",
        emoji: "💥",
        number: 135,
        name: "collision",
        category: "Smileys & Emotion",
        subCategory: "emotion",
        tags: ["explosion", "boom", "impact", "crash", "clash", "energy", "drama", "sudden", "power", "symbol"],
        description: "A burst symbolizing collision or explosion. Represents sudden impact, conflict, or dramatic events."
    },
    "💫": {
        code: "U+1F4AB",
        emoji: "💫",
        number: 136,
        name: "dizzy",
        category: "Smileys & Emotion",
        subCategory: "emotion",
        tags: ["stars", "confusion", "faint", "woozy", "spinning", "shock", "stun", "vertigo", "disoriented", "symbol"],
        description: "A swirling star symbol, conveying dizziness, confusion, or being star-struck."
    },
    "💦": {
        code: "U+1F4A6",
        emoji: "💦",
        number: 137,
        name: "sweat droplets",
        category: "Smileys & Emotion",
        subCategory: "emotion",
        tags: ["sweat", "effort", "exercise", "nervous", "anxious", "hot", "labor", "tired", "glistening", "symbol"],
        description: "Flying sweat droplets, representing physical effort, nervousness, or heat."
    },
    "💨": {
        code: "U+1F4A8",
        emoji: "💨",
        number: 138,
        name: "dashing away",
        category: "Smileys & Emotion",
        subCategory: "emotion",
        tags: ["speed", "fast", "wind", "escape", "exit", "movement", "smoke", "zoom", "blast", "symbol"],
        description: "A gust of wind or smoke, symbolizing speed, quick exits, or something vanishing rapidly."
    },
    "🕳": {
        code: "U+1F573",
        emoji: "🕳",
        number: 139,
        name: "hole",
        category: "Smileys & Emotion",
        subCategory: "emotion",
        tags: ["empty", "void", "pit", "tunnel", "absence", "dig", "dark", "hollow", "symbol"],
        description: "A small dark hole, representing emptiness, mystery, or the act of digging."
    },
    "💣": {
        code: "U+1F4A3",
        emoji: "💣",
        number: 140,
        name: "bomb",
        category: "Smileys & Emotion",
        subCategory: "emotion",
        tags: ["explosive", "danger", "boom", "threat", "violence", "warning", "terror", "attack", "symbol"],
        description: "A cartoon bomb with a lit fuse, symbolizing danger, explosive situations, or metaphorical 'time bombs.'"
    },
    "💬": {
        code: "U+1F4AC",
        emoji: "💬",
        number: 141,
        name: "speech balloon",
        category: "Smileys & Emotion",
        subCategory: "emotion",
        tags: ["chat", "message", "conversation", "dialogue", "talk", "text", "bubble", "communication", "symbol"],
        description: "A speech bubble with text, representing conversation, commentary, or dialogue in visual media."
    },
    "👁️‍🗨️": {
        code: "U+1F441 U+FE0F U+200D U+1F5E8 U+FE0F",
        emoji: "👁️‍🗨️",
        number: 142,
        name: "eye in speech bubble",
        category: "Smileys & Emotion",
        subCategory: "emotion",
        tags: ["privacy", "surveillance", "watching", "attention", "anonymous", "awareness", "Big Brother", "symbol"],
        description: "An eye inside a speech bubble, symbolizing being watched, privacy concerns, or anonymous messages."
    },
    "🗨": {
        code: "U+1F5E8",
        emoji: "🗨",
        number: 143,
        name: "left speech bubble",
        category: "Smileys & Emotion",
        subCategory: "emotion",
        tags: ["dialogue", "left", "chat", "message", "conversation", "direction", "symbol"],
        description: "A left-aligned speech bubble, used in comics or designs to indicate dialogue direction."
    },
    "🗯": {
        code: "U+1F5EF",
        emoji: "🗯",
        number: 144,
        name: "right anger bubble",
        category: "Smileys & Emotion",
        subCategory: "emotion",
        tags: ["anger", "shout", "yell", "frustration", "rage", "venting", "direction", "symbol"],
        description: "A right-aligned anger bubble with jagged edges, representing shouting or heated arguments."
    },
    "💭": {
        "code": "U+1F4AD",
        "emoji": "💭",
        "number": 145,
        "name": "thought balloon",
        "category": "Smileys & Emotion",
        "subCategory": "emotion",
        "tags": ["think", "musing", "daydream", "imagine", "contemplate", "reflect", "idea", "brainstorm", "introspection", "ponder", "meditate", "fantasy", "cloud", "symbol", "comic", "bubble", "mind", "philosophy", "cogitate"],
        "description": "A cloud-shaped thought bubble, representing internal monologue, ideas, or daydreaming. Often used in comics to show unspoken thoughts."
    },
    "💤": {
        "code": "U+1F4A4",
        "emoji": "💤",
        "number": 146,
        "name": "zzz",
        "category": "Smileys & Emotion",
        "subCategory": "emotion",
        "tags": ["sleep", "snore", "tired", "bored", "rest", "nap", "exhaustion", "lazy", "drowsy", "bedtime", "dream", "fatigue", "symbol", "noise", "sound", "quiet", "calm"],
        "description": "A symbol with three Z’s (💤), indicating sleep, snoring, or boredom. Used to represent someone asleep or something tedious."
    },
    "👋": {
        "code": "U+1F44B",
        "emoji": "👋",
        "number": 147,
        "name": "waving hand",
        "category": "People & Body",
        "subCategory": "hand-fingers-open",
        "tags": ["hello", "goodbye", "greeting", "farewell", "hi", "wave", "gesture", "friendly", "welcome", "acknowledge", "signal", "parting", "salutation", "communication", "palm", "movement", "cheerful", "polite", "interaction"],
        "description": "A hand waving side to side, used to greet someone, say goodbye, or attract attention in a friendly manner."
    },
    "🤚": {
        "code": "U+1F91A",
        "emoji": "🤚",
        "number": 148,
        "name": "raised back of hand",
        "category": "People & Body",
        "subCategory": "hand-fingers-open",
        "tags": ["stop", "pause", "attention", "backhand", "gesture", "high-five", "halt", "dismiss", "prevention", "palm", "warning", "signal", "caution", "block", "deny", "resistance"],
        "description": "The back of a raised hand, often used to signal 'stop,' request attention, or prepare for a high-five."
    },
    "🖐": {
        "code": "U+1F590",
        "emoji": "🖐",
        "number": 149,
        "name": "hand with fingers splayed",
        "category": "People & Body",
        "subCategory": "hand-fingers-open",
        "tags": ["stop", "halt", "spread", "high-five", "palm", "gesture", "wide", "open", "pause", "dismiss", "splay", "signal", "flat", "prevention", "resist", "universal"],
        "description": "A hand with fingers spread wide, used to signal 'stop,' emphasize a point, or prepare for a high-five."
    },
    "✋": {
        "code": "U+270B",
        "emoji": "✋",
        "number": 150,
        "name": "raised hand",
        "category": "People & Body",
        "subCategory": "hand-fingers-open",
        "tags": ["volunteer", "question", "greeting", "hi", "stop", "silence", "gesture", "participation", "classroom", "attention", "palm", "halt", "speak", "answer", "signal", "demand"],
        "description": "A raised hand with palm facing forward, often used to ask a question, volunteer, or request silence."
    },
    "🖖": {
        "code": "U+1F596",
        "emoji": "🖖",
        "number": 151,
        "name": "vulcan salute",
        "category": "People & Body",
        "subCategory": "hand-fingers-open",
        "tags": ["star trek", "live long and prosper", "spock", "greeting", "fandom", "nerd", "peace", "logic", "culture", "gesture", "split fingers", "salute", "symbol", "sci-fi", "unique"],
        "description": "A hand gesture with the palm forward and fingers split between the middle and ring fingers. Iconic from *Star Trek*, meaning 'Live long and prosper.'"
    },
    "👌": {
        "code": "U+1F44C",
        "emoji": "👌",
        "number": 152,
        "name": "OK hand",
        "category": "People & Body",
        "subCategory": "hand-fingers-partial",
        "tags": ["okay", "approve", "perfect", "agree", "seal", "gesture", "money", "symbol", "zero", "circle", "fingers", "cool", "acceptance", "sign", "positive", "consent"],
        "description": "A hand gesture forming a circle with the thumb and index finger, signaling approval, agreement, or perfection."
    },
    "✌": {
        "code": "U+270C",
        "emoji": "✌",
        "number": 153,
        "name": "victory hand",
        "category": "People & Body",
        "subCategory": "hand-fingers-partial",
        "tags": ["peace", "victory", "win", "hippie", "culture", "two", "fingers", "gesture", "symbol", "success", "V-sign", "optimism", "protest", "prosperity"],
        "description": "A hand gesture with the index and middle fingers raised in a V-shape, symbolizing peace, victory, or success."
    },
    "🤞": {
        "code": "U+1F91E",
        "emoji": "🤞",
        "number": 154,
        "name": "crossed fingers",
        "category": "People & Body",
        "subCategory": "hand-fingers-partial",
        "tags": ["luck", "hope", "wish", "promise", "lie", "superstition", "gesture", "optimism", "chance", "fortune", "pray", "manifest", "symbol", "fingers crossed"],
        "description": "Crossed fingers, used to wish for luck, hope for a positive outcome, or ironically signal a white lie."
    },
    "🤟": {
        "code": "U+1F91F",
        "emoji": "🤟",
        "number": 155,
        "name": "love-you gesture",
        "category": "People & Body",
        "subCategory": "hand-fingers-partial",
        "tags": ["I love you", "sign language", "ASL", "deaf", "culture", "gesture", "ILY", "symbol", "handshape", "affection", "friendship", "rock", "music", "expression"],
        "description": "A hand gesture combining the letters I, L, and Y in American Sign Language (ASL), meaning 'I love you.' Popular in rock culture."
    },
    "🤘": {
        "code": "U+1F918",
        "emoji": "🤘",
        "number": 156,
        "name": "sign of the horns",
        "category": "People & Body",
        "subCategory": "hand-fingers-partial",
        "tags": ["rock", "metal", "music", "devil horns", "concert", "gesture", "symbol", "party", "rebellion", "badass", "culture", "applause", "fandom"],
        "description": "A hand gesture with the index and pinky fingers raised, symbolizing rock music, rebellion, or enthusiasm at concerts."
    },
    "🤙": {
        "code": "U+1F919",
        "emoji": "🤙",
        "number": 157,
        "name": "call me hand",
        "category": "People & Body",
        "subCategory": "hand-fingers-partial",
        "tags": ["hang loose", "surf", "hawaii", "shaka", "greeting", "chill", "phone", "gesture", "relax", "beach", "culture", "cool", "aloha"],
        "description": "A hand gesture with the thumb and pinky extended, meaning 'call me' or 'hang loose.' Rooted in Hawaiian surf culture."
    },
    "👈": {
        "code": "U+1F448",
        "emoji": "👈",
        "number": 158,
        "name": "backhand index pointing left",
        "category": "People & Body",
        "subCategory": "hand-single-finger",
        "tags": ["direction", "left", "previous", "back", "gesture", "arrow", "attention", "point", "cursor", "sideways", "navigation", "hint", "indicate"],
        "description": "A hand pointing left with the index finger, used to indicate direction, backtrack, or shift focus."
    },
    "👉": {
        "code": "U+1F449",
        "emoji": "👉",
        "number": 159,
        "name": "backhand index pointing right",
        "category": "People & Body",
        "subCategory": "hand-single-finger",
        "tags": ["direction", "right", "next", "forward", "gesture", "arrow", "attention", "point", "cursor", "sideways", "navigation", "hint", "indicate"],
        "description": "A hand pointing right with the index finger, signaling direction, progression, or moving forward."
    },
    "👆": {
        "code": "U+1F446",
        "emoji": "👆",
        "number": 160,
        "name": "backhand index pointing up",
        "category": "People & Body",
        "subCategory": "hand-single-finger",
        "tags": ["direction", "up", "above", "increase", "top", "gesture", "arrow", "point", "cursor", "skyward", "navigation", "hint", "indicate"],
        "description": "A hand pointing upward with the index finger, indicating elevation, improvement, or something above."
    },
    "🖕": {
        "code": "U+1F595",
        "emoji": "🖕",
        "number": 161,
        "name": "middle finger",
        "category": "People & Body",
        "subCategory": "hand-single-finger",
        "tags": ["rude", "anger", "insult", "disrespect", "offensive", "vulgar", "gesture", "protest", "frustration", "taboo", "defiance", "symbol"],
        "description": "A raised middle finger, universally recognized as a vulgar gesture of contempt, defiance, or insult."
    },
    "👇": {
        "code": "U+1F447",
        "emoji": "👇",
        "number": 162,
        "name": "backhand index pointing down",
        "category": "People & Body",
        "subCategory": "hand-single-finger",
        "tags": ["direction", "down", "below", "decrease", "bottom", "gesture", "arrow", "point", "cursor", "groundward", "navigation", "hint", "indicate"],
        "description": "A hand pointing downward with the index finger, indicating something below, reduction, or decline."
    },
    "☝": {
        "code": "U+261D",
        "emoji": "☝",
        "number": 163,
        "name": "index pointing up",
        "category": "People & Body",
        "subCategory": "hand-single-finger",
        "tags": ["direction", "up", "attention", "idea", "important", "gesture", "raise", "suggestion", "highlight", "emphasis", "advice", "symbol"],
        "description": "A single index finger pointing upward, often used to emphasize a point, idea, or important detail."
    },
    "👍": {
        "code": "U+1F44D",
        "emoji": "👍",
        "number": 164,
        "name": "thumbs up",
        "category": "People & Body",
        "subCategory": "hand-fingers-closed",
        "tags": ["approval", "agree", "positive", "support", "encouragement", "yes", "good", "success", "endorsement", "optimism", "satisfaction", "like", "recommend", "upvote", "compliment", "accept", "favor", "okay", "seal", "validation"],
        "description": "A thumbs-up gesture, universally symbolizing approval, agreement, or encouragement. Often used to signal 'good job' or 'I agree.'"
    },
    "👎": {
        "code": "U+1F44E",
        "emoji": "👎",
        "number": 165,
        "name": "thumbs down",
        "category": "People & Body",
        "subCategory": "hand-fingers-closed",
        "tags": ["disapproval", "reject", "negative", "bad", "failure", "dislike", "oppose", "dissatisfaction", "criticism", "veto", "denial", "refusal", "unhappy", "downvote", "reprimand", "condemn", "reject", "object", "disagree"],
        "description": "A thumbs-down gesture, representing disapproval, rejection, or dislike. Commonly used to express disagreement or dissatisfaction."
    },
    "✊": {
        "code": "U+270A",
        "emoji": "✊",
        "number": 166,
        "name": "raised fist",
        "category": "People & Body",
        "subCategory": "hand-fingers-closed",
        "tags": ["power", "solidarity", "protest", "strength", "resistance", "unity", "fight", "activism", "determination", "victory", "support", "defiance", "movement", "empowerment", "rally", "fist bump", "cultural", "struggle", "collective"],
        "description": "A raised clenched fist, symbolizing strength, solidarity, or resistance. Often used in protests or to represent empowerment."
    },
    "👊": {
        "code": "U+1F44A",
        "emoji": "👊",
        "number": 167,
        "name": "oncoming fist",
        "category": "People & Body",
        "subCategory": "hand-fingers-closed",
        "tags": ["punch", "attack", "fight", "boxing", "conflict", "aggression", "fist bump", "sports", "competition", "challenge", "combat", "defense", "action", "power", "energy", "hit", "impact", "violence", "martial arts"],
        "description": "A fist thrusting forward, representing a punch, confrontation, or playful fist bump. Used in contexts of conflict or camaraderie."
    },
    "🤛": {
        "code": "U+1F91B",
        "emoji": "🤛",
        "number": 168,
        "name": "left-facing fist",
        "category": "People & Body",
        "subCategory": "hand-fingers-closed",
        "tags": ["direction", "left", "sideways", "fist bump", "unity", "teamwork", "greeting", "gesture", "coordination", "mirror", "alignment", "position", "orientation", "movement", "interaction", "balance", "partnership"],
        "description": "A left-facing clenched fist, often used in coordination with a right-facing fist for gestures like fist bumps or symbolic alignment."
    },
    "🤜": {
        "code": "U+1F91C",
        "emoji": "🤜",
        "number": 169,
        "name": "right-facing fist",
        "category": "People & Body",
        "subCategory": "hand-fingers-closed",
        "tags": ["direction", "right", "sideways", "fist bump", "unity", "teamwork", "greeting", "gesture", "coordination", "mirror", "alignment", "position", "orientation", "movement", "interaction", "balance", "partnership"],
        "description": "A right-facing clenched fist, often paired with a left-facing fist for gestures like fist bumps or symbolic alignment."
    },
    "👏": {
        "code": "U+1F44F",
        "emoji": "👏",
        "number": 170,
        "name": "clapping hands",
        "category": "People & Body",
        "subCategory": "hands",
        "tags": ["applause", "praise", "approval", "celebrate", "encouragement", "success", "performance", "support", "cheer", "acclaim", "ovation", "gratitude", "recognition", "joy", "enthusiasm", "approbation", "accolade", "admiration", "positive"],
        "description": "Two hands clapping, symbolizing applause, praise, or celebration. Used to congratulate or show appreciation."
    },
    "🙌": {
        "code": "U+1F64C",
        "emoji": "🙌",
        "number": 171,
        "name": "raising hands",
        "category": "People & Body",
        "subCategory": "hands",
        "tags": ["celebration", "excitement", "victory", "hallelujah", "jubilation", "gratitude", "praise", "surrender", "achievement", "success", "worship", "freedom", "joy", "elation", "enthusiasm", "triumph", "positive", "emotion"],
        "description": "Two raised hands, often used to celebrate success, express gratitude, or signify surrender. Conveys joy or triumph."
    },
    "👐": {
        "code": "U+1F450",
        "emoji": "👐",
        "number": 172,
        "name": "open hands",
        "category": "People & Body",
        "subCategory": "hands",
        "tags": ["openness", "honesty", "welcome", "surrender", "hug", "gesture", "trust", "vulnerability", "transparency", "acceptance", "receiving", "giving", "innocence", "peace", "receptiveness", "non-threatening", "symbol"],
        "description": "Two open palms facing outward, symbolizing openness, honesty, or a welcoming gesture. Can also represent surrender or a hug."
    },
    "🤲": {
        "code": "U+1F932",
        "emoji": "🤲",
        "number": 173,
        "name": "palms up together",
        "category": "People & Body",
        "subCategory": "hands",
        "tags": ["prayer", "offering", "request", "begging", "balance", "equality", "unity", "gesture", "receptiveness", "humility", "hospitality", "cupping", "receiving", "sharing", "modesty", "meditation", "symbol"],
        "description": "Two hands held together with palms facing upward, used for prayer, offering, or requesting assistance. Conveys humility or receptiveness."
    },
    "🤝": {
        "code": "U+1F91D",
        "emoji": "🤝",
        "number": 174,
        "name": "handshake",
        "category": "People & Body",
        "subCategory": "hands",
        "tags": ["agreement", "partnership", "deal", "trust", "greeting", "respect", "cooperation", "alliance", "business", "friendship", "peace", "solidarity", "contract", "commitment", "professional", "bond", "unity"],
        "description": "Two hands shaking, symbolizing an agreement, partnership, or greeting. Represents trust, respect, or mutual commitment."
    },
    "🙏": {
        "code": "U+1F64F",
        "emoji": "🙏",
        "number": 175,
        "name": "folded hands",
        "category": "People & Body",
        "subCategory": "hands",
        "tags": ["prayer", "please", "thank you", "gratitude", "hope", "wish", "namaste", "respect", "blessing", "meditation", "appeal", "begging", "serenity", "culture", "spirituality", "symbol"],
        "description": "Two hands pressed together, used for prayer, gratitude, or a respectful greeting (e.g., 'namaste'). Conveys hope or a plea."
    },
    "✍": {
        "code": "U+270D",
        "emoji": "✍",
        "number": 176,
        "name": "writing hand",
        "category": "People & Body",
        "subCategory": "hand-prop",
        "tags": ["write", "signature", "document", "creativity", "author", "journal", "art", "study", "note", "contract", "education", "literature", "ink", "pen", "calligraphy", "symbol", "learning"],
        "description": "A hand holding a pen, symbolizing writing, signing documents, or creative work. Represents literacy, education, or artistic expression."
    },
    "💅": {
        "code": "U+1F485",
        "emoji": "💅",
        "number": 177,
        "name": "nail polish",
        "category": "People & Body",
        "subCategory": "hand-prop",
        "tags": ["manicure", "beauty", "self-care", "fashion", "grooming", "cosmetics", "luxury", "style", "glamour", "pamper", "aesthetic", "color", "art", "wellness", "vanity", "decoration"],
        "description": "A hand applying nail polish, representing beauty routines, self-care, or fashion. Often used to highlight glamour or pampering."
    },
    "🤳": {
        "code": "U+1F933",
        "emoji": "🤳",
        "number": 178,
        "name": "selfie",
        "category": "People & Body",
        "subCategory": "hand-prop",
        "tags": ["photo", "camera", "social media", "smartphone", "vanity", "modern", "technology", "pose", "snapshot", "influencer", "millennial", "capture", "moment", "share", "trend", "digital"],
        "description": "A hand holding a smartphone for a self-portrait photo, symbolizing modern culture, social media, or self-expression."
    },
    "💪": {
        "code": "U+1F4AA",
        "emoji": "💪",
        "number": 179,
        "name": "flexed biceps",
        "category": "People & Body",
        "subCategory": "body-parts",
        "tags": ["strength", "muscle", "exercise", "gym", "power", "fitness", "arm", "bodybuilding", "sports", "health", "determination", "effort", "motivation", "athlete", "energy", "workout", "physical", "toughness", "resolve", "action", "sweat", "movement"],
        "description": "A flexed bicep symbolizing physical strength, effort, or determination. Often used to represent workouts, sports, or personal empowerment."
    },
    "🦵": {
        "code": "U+1F9B5",
        "emoji": "🦵",
        "number": 180,
        "name": "⊛ leg",
        "category": "People & Body",
        "subCategory": "body-parts",
        "tags": ["limb", "walk", "run", "support", "body", "anatomy", "mobility", "movement", "strength", "exercise", "injury", "pedal", "kick", "stance", "balance", "physical", "joint", "muscle", "skeleton", "health", "fitness"],
        "description": "A leg representing mobility, physical activity, or anatomical discussion. Used in contexts involving walking, running, or leg health."
    },
    "🦶": {
        "code": "U+1F9B6",
        "emoji": "🦶",
        "number": 181,
        "name": "⊛ foot",
        "category": "People & Body",
        "subCategory": "body-parts",
        "tags": ["toes", "walking", "stand", "pedal", "socks", "shoes", "balance", "anatomy", "stomp", "kick", "arch", "heel", "sole", "mobility", "health", "reflexology", "pedicure", "injury", "grounded", "movement"],
        "description": "A foot symbolizing walking, standing, or foot care. Often used in discussions about footwear, pedicures, or physical therapy."
    },
    "👂": {
        "code": "U+1F442",
        "emoji": "👂",
        "number": 182,
        "name": "ear",
        "category": "People & Body",
        "subCategory": "body-parts",
        "tags": ["hearing", "sound", "listen", "anatomy", "piercing", "earring", "noise", "auditory", "attention", "body part", "communication", "music", "volume", "health", "infection", "balance", "symmetry", "sensitivity", "auricular", "acoustic"],
        "description": "An ear representing hearing, sound, or ear-related topics like piercings or auditory health."
    },
    "👃": {
        "code": "U+1F443",
        "emoji": "👃",
        "number": 183,
        "name": "nose",
        "category": "People & Body",
        "subCategory": "body-parts",
        "tags": ["smell", "scent", "breath", "sneeze", "anatomy", "allergy", "sinus", "sniff", "aroma", "nostril", "face", "body part", "health", "cold", "perfume", "odor", "respiration", "rhinoplasty", "sensory"],
        "description": "A nose symbolizing smell, breathing, or nasal features. Used in contexts like allergies, perfumes, or respiratory health."
    },
    "🧠": {
        "code": "U+1F9E0",
        "emoji": "🧠",
        "number": 184,
        "name": "brain",
        "category": "People & Body",
        "subCategory": "body-parts",
        "tags": ["intelligence", "mind", "thought", "knowledge", "science", "neurology", "psychology", "learning", "memory", "creativity", "logic", "mental health", "cognitive", "genius", "problem-solving", "study", "research", "anatomy", "organ", "consciousness"],
        "description": "A brain representing intellect, mental processes, or neuroscience. Often used in discussions about learning, creativity, or mental health."
    },
    "🦷": {
        "code": "U+1F9B7",
        "emoji": "🦷",
        "number": 185,
        "name": "⊛ tooth",
        "category": "People & Body",
        "subCategory": "body-parts",
        "tags": ["dental", "teeth", "brush", "dentist", "oral hygiene", "cavity", "smile", "pain", "health", "enamel", "molar", "incisor", "extraction", "braces", "plaque", "decay", "clean", "care", "anatomy", "white"],
        "description": "A tooth symbolizing dental health, hygiene, or issues like cavities. Used in contexts related to dentistry or oral care."
    },
    "🦴": {
        "code": "U+1F9B4",
        "emoji": "🦴",
        "number": 186,
        "name": "⊛ bone",
        "category": "People & Body",
        "subCategory": "body-parts",
        "tags": ["skeleton", "anatomy", "calcium", "x-ray", "fracture", "skull", "support", "structure", "marrow", "health", "archaeology", "fossil", "death", "body", "rigid", "joint", "orthopedic", "medical", "biology"],
        "description": "A bone representing the skeletal system, anatomy, or medical contexts like fractures. Also used metaphorically for strength or mortality."
    },
    "👀": {
        "code": "U+1F440",
        "emoji": "👀",
        "number": 187,
        "name": "eyes",
        "category": "People & Body",
        "subCategory": "body-parts",
        "tags": ["vision", "see", "look", "watch", "observe", "sight", "glance", "gaze", "peek", "expression", "emotion", "face", "anatomy", "optic", "retina", "pupil", "eyelid", "wink", "tear", "contact lens"],
        "description": "A pair of eyes symbolizing vision, observation, or emotional expression. Often used to convey curiosity, suspicion, or attraction."
    },
    "👁": {
        "code": "U+1F441",
        "emoji": "👁",
        "number": 188,
        "name": "eye",
        "category": "People & Body",
        "subCategory": "body-parts",
        "tags": ["vision", "see", "look", "watch", "focus", "iris", "pupil", "sight", "perception", "observation", "anatomy", "detail", "attention", "spy", "surveillance", "symbol", "all-seeing", "mystical"],
        "description": "A single eye, often used metaphorically for perception, awareness, or mystical symbolism (e.g., 'the all-seeing eye')."
    },
    "👅": {
        "code": "U+1F445",
        "emoji": "👅",
        "number": 189,
        "name": "tongue",
        "category": "People & Body",
        "subCategory": "body-parts",
        "tags": ["taste", "lick", "flavor", "speech", "mouth", "organ", "sensory", "playful", "teasing", "gesture", "burn", "bitter", "sweet", "salty", "spicy", "articulation", "oral", "flexibility", "health", "anatomy"],
        "description": "A tongue symbolizing taste, speech, or playful gestures. Often used in contexts involving food, teasing, or oral health."
    },
    "👄": {
        "code": "U+1F444",
        "emoji": "👄",
        "number": 190,
        "name": "mouth",
        "category": "People & Body",
        "subCategory": "body-parts",
        "tags": ["lips", "speak", "kiss", "talk", "expression", "whisper", "shout", "sing", "breath", "oral", "health", "anatomy", "smile", "frown", "communication", "voice", "language", "silence", "bite", "chew"],
        "description": "A mouth representing speech, eating, or facial expressions. Used in discussions about communication, kissing, or oral hygiene."
    },
    "👶": {
        "code": "U+1F476",
        "emoji": "👶",
        "number": 191,
        "name": "baby",
        "category": "people",
        "subCategory": "person",
        "tags": ["baby", "infant", "newborn", "child", "cute", "small", "young", "tiny", "new", "born", "nursery", "milk", "diaper", "crawl", "play", "innocent", "sweet", "little", "bundle", "joy"],
        "description": "A depiction of a newborn baby, often shown with a diaper and sometimes with a pacifier. Represents infancy, new beginnings, and the joy of a newborn."
    },
    "🧒": {
        "code": "U+1F9D2",
        "emoji": "🧒",
        "number": 192,
        "name": "child",
        "category": "people",
        "subCategory": "person",
        "tags": ["child", "kid", "young", "boy", "girl", "toddler", "youth", "play", "fun", "happy", "cute", "small", "growing", "innocent", "curious", "active", "energetic", "school", "childhood"],
        "description": "A representation of a young child, typically older than a baby but not yet a teenager.  Often depicted as a gender-neutral figure. Represents childhood, youth, and innocence."
    },
    "👦": {
        "code": "U+1F466",
        "emoji": "👦",
        "number": 193,
        "name": "boy",
        "category": "people",
        "subCategory": "person",
        "tags": ["boy", "male", "child", "kid", "young", "youth", "teen", "teenager", "son", "brother", "guy", "dude", "lad", "chap", "happy", "playful", "active", "growing", "childhood"],
        "description": "A representation of a young male child. Represents boyhood, childhood, and young age."
    },
    "👧": {
        "code": "U+1F467",
        "emoji": "👧",
        "number": 194,
        "name": "girl",
        "category": "people",
        "subCategory": "person",
        "tags": ["girl", "female", "child", "kid", "young", "youth", "teen", "teenager", "daughter", "sister", "happy", "playful", "cute", "growing", "childhood", "woman", "young woman"],
        "description": "A representation of a young female child. Represents girlhood, childhood, and young age."
    },
    "🧑": {
        "code": "U+1F9D1",
        "emoji": "🧑",
        "number": 195,
        "name": "person",
        "category": "people",
        "subCategory": "person",
        "tags": ["person", "human", "individual", "people", "adult", "child", "gender-neutral", "neutral", "everybody", "someone", "anonymous", "user", "account", "profile", "character", "figure", "silhouette", "representation"],
        "description": "A generic representation of a person, often used when gender is not specified or not relevant. Can represent anyone, regardless of age or gender."
    },
    "👱": {
        "code": "U+1F471",
        "emoji": "👱",
        "number": 196,
        "name": "person: blond hair",
        "category": "people",
        "subCategory": "person",
        "tags": ["person", "blond", "blonde", "hair", "fair", "light", "yellow", "human", "individual", "people", "man", "woman", "girl", "boy", "teen", "adult", "caucasian", "nordic"],
        "description": "A person with blond hair. Can be male or female, and the age is not specified. Represents people with light-colored hair."
    },
    "👨": {
        "code": "U+1F468",
        "emoji": "👨",
        "number": 197,
        "name": "man",
        "category": "people",
        "subCategory": "person",
        "tags": ["man", "male", "adult", "guy", "dude", "gentleman", "father", "husband", "brother", "son", "men", "masculine", "strong", "powerful", "mature", "grown", "elderly", "adult", "young"],
        "description": "A representation of an adult male. Represents men, masculinity, and adulthood."
    },
    "🧔": {
        "code": "U+1F9D4",
        "emoji": "🧔",
        "number": 198,
        "name": "man: beard",
        "category": "people",
        "subCategory": "person",
        "tags": ["man", "beard", "facial", "hair", "male", "adult", "guy", "dude", "bearded", "grooming", "style", "fashion", "hipster", "lumberjack", "mature", "father", "husband", "brother", "son"],
        "description": "A man with a beard. Represents men with facial hair and can be associated with masculinity, maturity, and style."
    },
    "👱‍♂️": {
        "code": "U+1F471 U+200D U+2642 U+FE0F",
        "emoji": "👱‍♂️",
        "number": 199,
        "name": "man: blond hair",
        "category": "people",
        "subCategory": "person",
        "tags": ["man", "blond", "blonde", "hair", "male", "adult", "guy", "dude", "fair", "light", "yellow", "caucasian", "nordic", "hair color", "hairstyle", "grooming", "men"],
        "description": "A man with blond hair. Represents men with light-colored hair."
    },
    "👨‍🦰": {
        "code": "U+1F468 U+200D U+1F9B0",
        "emoji": "👨‍🦰",
        "number": 200,
        "name": "man: red hair",
        "category": "people",
        "subCategory": "person",
        "tags": ["man", "red", "hair", "ginger", "male", "adult", "guy", "dude", "redhead", "fire", "orange", "irish", "scottish", "hair color", "hairstyle", "grooming", "men"],
        "description": "A man with red hair. Represents men with red or ginger hair."
    },
    "👨‍🦱": {
        "code": "U+1F468 U+200D U+1F9B1",
        "emoji": "👨‍🦱",
        "number": 201,
        "name": "man: curly hair",
        "category": "people",
        "subCategory": "person",
        "tags": ["man", "curly", "hair", "male", "adult", "guy", "dude", "coily", "kinky", "afro", "natural", "hair color", "hairstyle", "grooming", "men", "textured"],
        "description": "A man with curly hair. Represents men with naturally curly or coily hair."
    },
    "👨‍🦳": {
        "code": "U+1F468 U+200D U+1F9B3",
        "emoji": "👨‍🦳",
        "number": 202,
        "name": "man: white hair",
        "category": "people",
        "subCategory": "person",
        "tags": ["man", "white", "hair", "gray", "grey", "silver", "male", "adult", "guy", "dude", "old", "elderly", "senior", "aged", "hair color", "hairstyle", "grooming", "men", "mature"],
        "description": "A man with white or gray hair. Represents older men or men with naturally white hair."
    },
    "👨‍🦲": {
        "code": "U+1F468 U+200D U+1F9B2",
        "emoji": "👨‍🦲",
        "number": 203,
        "name": "man: bald",
        "category": "people",
        "subCategory": "person",
        "tags": ["man", "bald", "hair", "male", "adult", "guy", "dude", "head", "shaved", "hairless", "follically", "challenged", "hairline", "grooming", "men", "no hair"],
        "description": "A man with a bald head. Represents men who have lost their hair or have shaved heads."
    },
    "👩": {
        "code": "U+1F469",
        "emoji": "👩",
        "number": 204,
        "name": "woman",
        "category": "people",
        "subCategory": "person",
        "tags": ["woman", "female", "adult", "girl", "lady", "madam", "wife", "mother", "sister", "daughter", "women", "feminine", "strong", "powerful", "mature", "grown", "elderly", "young"],
        "description": "A representation of an adult female. Represents women, femininity, and adulthood."
    },
    "👱‍♀️": {
        "code": "U+1F471 U+200D U+2640 U+FE0F",
        "emoji": "👱‍♀️",
        "number": 205,
        "name": "woman: blond hair",
        "category": "people",
        "subCategory": "person",
        "tags": ["woman", "blond", "blonde", "hair", "female", "adult", "girl", "lady", "fair", "light", "yellow", "caucasian", "nordic", "hair color", "hairstyle", "grooming", "women"],
        "description": "A woman with blond hair. Represents women with light-colored hair."
    },
    "👩‍🦰": {
        "code": "U+1F469 U+200D U+1F9B0",
        "emoji": "👩‍🦰",
        "number": 206,
        "name": "woman: red hair",
        "category": "people",
        "subCategory": "person",
        "tags": ["woman", "red", "hair", "ginger", "female", "adult", "girl", "lady", "redhead", "fire", "orange", "irish", "scottish", "hair color", "hairstyle", "grooming", "women"],
        "description": "A woman with red hair. Represents women with red or ginger hair."
    },
    "👩‍🦱": {
        "code": "U+1F469 U+200D U+1F9B1",
        "emoji": "👩‍🦱",
        "number": 207,
        "name": "woman: curly hair",
        "category": "people",
        "subCategory": "person",
        "tags": ["woman", "curly", "hair", "female", "adult", "girl", "lady", "coily", "kinky", "afro", "natural", "hair color", "hairstyle", "grooming", "women", "textured"],
        "description": "A woman with curly hair. Represents women with naturally curly or coily hair."
    },
    "👩‍🦳": {
        "code": "U+1F469 U+200D U+1F9B3",
        "emoji": "👩‍🦳",
        "number": 208,
        "name": "woman: white hair",
        "category": "people",
        "subCategory": "person",
        "tags": ["woman", "white", "hair", "gray", "grey", "silver", "female", "adult", "girl", "lady", "old", "elderly", "senior", "aged", "hair color", "hairstyle", "grooming", "women", "mature"],
        "description": "A woman with white or gray hair. Represents older women or women with naturally white hair."
    },
    "👩‍🦲": {
        "code": "U+1F469 U+200D U+1F9B2",
        "emoji": "👩‍🦲",
        "number": 209,
        "name": "woman: bald",
        "category": "people",
        "subCategory": "person",
        "tags": ["woman", "bald", "hair", "female", "adult", "girl", "lady", "head", "shaved", "hairless", "follically", "challenged", "hairline", "grooming", "women", "no hair"],
        "description": "A woman with a bald head. Represents women who have lost their hair or have shaved heads."
    },
    "🧓": {
        "code": "U+1F9D3",
        "emoji": "🧓",
        "number": 210,
        "name": "older person",
        "category": "people",
        "subCategory": "person",
        "tags": ["older", "person", "senior", "elderly", "aged", "old", "adult", "human", "individual", "people", "mature", "wise", "experienced", "retired", "grandparent", "grandma", "grandpa"],
        "description": "A generic representation of an older person.  Can be male or female. Represents seniority, age, and experience."
    },
    "👴": {
        "code": "U+1F474",
        "emoji": "👴",
        "number": 211,
        "name": "old man",
        "category": "people",
        "subCategory": "person",
        "tags": ["old", "man", "elderly", "senior", "aged", "male", "adult", "guy", "dude", "grandfather", "grandpa", "wise", "experienced", "retired", "old man", "mature", "aged"],
        "description": "A representation of an old man. Represents elderly men, old age, and wisdom."
    },
    "👵": {
        "code": "U+1F475",
        "emoji": "👵",
        "number": 212,
        "name": "old woman",
        "category": "people",
        "subCategory": "person",
        "tags": ["old", "woman", "elderly", "senior", "aged", "female", "adult", "girl", "lady", "grandmother", "grandma", "wise", "experienced", "retired", "old woman", "mature", "aged"],
        "description": "A representation of an old woman. Represents elderly women, old age, and wisdom."
    },
    "🙍": {
        "code": "U+1F64D",
        "emoji": "🙍",
        "number": 213,
        "name": "person frowning",
        "category": "people",
        "subCategory": "person-gesture",
        "tags": ["person", "frowning", "frown", "sad", "unhappy", "disappointed", "upset", "angry", "negative", "emotion", "feeling", "expression", "face", "gesture", "dissatisfied", "glum", "miserable"],
        "description": "A person with a frowning face. Represents sadness, disappointment, or disapproval."
    },
    "🙍‍♂️": {
        "code": "U+1F64D U+200D U+2642 U+FE0F",
        "emoji": "🙍‍♂️",
        "number": 214,
        "name": "man frowning",
        "category": "people",
        "subCategory": "person-gesture",
        "tags": ["man", "frowning", "frown", "sad", "unhappy", "disappointed", "upset", "angry", "negative", "emotion", "feeling", "expression", "face", "gesture", "dissatisfied", "glum", "miserable", "male"],
        "description": "A man with a frowning face. Represents sadness, disappointment, or disapproval in a male context."
    },
    "🙍‍♀️": {
        "code": "U+1F64D U+200D U+2640 U+FE0F",
        "emoji": "🙍‍♀️",
        "number": 215,
        "name": "woman frowning",
        "category": "people",
        "subCategory": "person-gesture",
        "tags": ["woman", "frowning", "frown", "sad", "unhappy", "disappointed", "upset", "angry", "negative", "emotion", "feeling", "expression", "face", "gesture", "dissatisfied", "glum", "miserable", "female"],
        "description": "A woman with a frowning face. Represents sadness, disappointment, or disapproval in a female context."
    },
    "🙎": {
        "code": "U+1F64E",
        "emoji": "🙎",
        "number": 216,
        "name": "person pouting",
        "category": "people",
        "subCategory": "person-gesture",
        "tags": ["person", "pouting", "pout", "angry", "annoyed", "upset", "frustrated", "sulky", "grumpy", "negative", "emotion", "feeling", "expression", "face", "gesture", "displeased", "irritated", "stubborn"],
        "description": "A person with a pouting face. Represents anger, annoyance, or frustration."
    },
    "🙎‍♂️": {
        "code": "U+1F64E U+200D U+2642 U+FE0F",
        "emoji": "🙎‍♂️",
        "number": 217,
        "name": "man pouting",
        "category": "people",
        "subCategory": "person-gesture",
        "tags": ["man", "pouting", "pout", "angry", "annoyed", "upset", "frustrated", "sulky", "grumpy", "negative", "emotion", "feeling", "expression", "face", "gesture", "displeased", "irritated", "stubborn", "male"],
        "description": "A man with a pouting face. Represents anger, annoyance, or frustration in a male context."
    },
    "🙎‍♀️": {
        "code": "U+1F64E U+200D U+2640 U+FE0F",
        "emoji": "🙎‍♀️",
        "number": 218,
        "name": "woman pouting",
        "category": "people",
        "subCategory": "person-gesture",
        "tags": ["woman", "pouting", "pout", "angry", "annoyed", "upset", "frustrated", "sulky", "grumpy", "negative", "emotion", "feeling", "expression", "face", "gesture", "displeased", "irritated", "stubborn", "female"],
        "description": "A woman with a pouting face. Represents anger, annoyance, or frustration in a female context."
    },
    "🙅": {
        "code": "U+1F645",
        "emoji": "🙅",
        "number": 219,
        "name": "person gesturing NO",
        "category": "people",
        "subCategory": "person-gesture",
        "tags": ["person", "no", "no gesture", "stop", "halt", "decline", "refusal", "rejection", "prohibition", "forbidden", "negative", "denial", "hand", "gesture", "body language", "communication"],
        "description": "A person gesturing NO with their arms crossed. Represents refusal, rejection, or prohibition."
    },
    "🙅‍♂️": {
        "code": "U+1F645 U+200D U+2642 U+FE0F",
        "emoji": "🙅‍♂️",
        "number": 220,
        "name": "man gesturing NO",
        "category": "people",
        "subCategory": "person-gesture",
        "tags": ["man", "no", "no gesture", "stop", "halt", "decline", "refusal", "rejection", "prohibition", "forbidden", "negative", "denial", "hand", "gesture", "body language", "communication", "male"],
        "description": "A man gesturing NO with their arms crossed. Represents refusal, rejection, or prohibition in a male context."
    },
    "🙅‍♀️": {
        "code": "U+1F645 U+200D U+2640 U+FE0F",
        "emoji": "🙅‍♀️",
        "number": 221,
        "name": "woman gesturing NO",
        "category": "people",
        "subCategory": "person-gesture",
        "tags": ["woman", "no", "no gesture", "stop", "halt", "decline", "refusal", "rejection", "prohibition", "forbidden", "negative", "denial", "hand", "gesture", "body language", "communication", "female"],
        "description": "A woman gesturing NO with their arms crossed. Represents refusal, rejection, or prohibition in a female context."
    },
    "🙆": {
        "code": "U+1F646",
        "emoji": "🙆",
        "number": 222,
        "name": "person gesturing OK",
        "category": "people",
        "subCategory": "person-gesture",
        "tags": ["person", "ok", "ok gesture", "yes", "agreement", "approval", "acceptance", "permission", "positive", "affirmative", "hand", "gesture", "body language", "communication", "fine", "good"],
        "description": "A person gesturing OK with their arms in a circle. Represents agreement, approval, or acceptance."
    },
    "🙆‍♂️": {
        "code": "U+1F646 U+200D U+2642 U+FE0F",
        "emoji": "🙆‍♂️",
        "number": 223,
        "name": "man gesturing OK",
        "category": "people",
        "subCategory": "person-gesture",
        "tags": ["man", "ok", "ok gesture", "yes", "agreement", "approval", "acceptance", "permission", "positive", "affirmative", "hand", "gesture", "body language", "communication", "fine", "good", "male"],
        "description": "A man gesturing OK with their arms in a circle. Represents agreement, approval, or acceptance in a male context."
    },
    "🙆‍♀️": {
        "code": "U+1F646 U+200D U+2640 U+FE0F",
        "emoji": "🙆‍♀️",
        "number": 224,
        "name": "woman gesturing OK",
        "category": "people",
        "subCategory": "person-gesture",
        "tags": ["woman", "ok", "ok gesture", "yes", "agreement", "approval", "acceptance", "permission", "positive", "affirmative", "hand", "gesture", "body language", "communication", "fine", "good", "female"],
        "description": "A woman gesturing OK with their arms in a circle. Represents agreement, approval, or acceptance in a female context."
    },
    "💁": {
        "code": "U+1F481",
        "emoji": "💁",
        "number": 225,
        "name": "person tipping hand",
        "category": "people",
        "subCategory": "person-gesture",
        "tags": ["person", "tipping hand", "information", "help", "service", "assistance", "offer", "present", "gesture", "hand", "body language", "communication", "suggest", "recommend"],
        "description": "A person tipping their hand, often used to present information or offer assistance. Can also represent a sassy or nonchalant attitude."
    },
    "💁‍♂️": {
        "code": "U+1F481 U+200D U+2642 U+FE0F",
        "emoji": "💁‍♂️",
        "number": 226,
        "name": "man tipping hand",
        "category": "people",
        "subCategory": "person-gesture",
        "tags": ["man", "tipping hand", "information", "help", "service", "assistance", "offer", "present", "gesture", "hand", "body language", "communication", "suggest", "recommend", "male"],
        "description": "A man tipping his hand, often used to present information or offer assistance. Can also represent a sassy or nonchalant attitude in a male context."
    },
    "💁‍♀️": {
        "code": "U+1F481 U+200D U+2640 U+FE0F",
        "emoji": "💁‍♀️",
        "number": 227,
        "name": "woman tipping hand",
        "category": "people",
        "subCategory": "person-gesture",
        "tags": ["woman", "tipping hand", "information", "help", "service", "assistance", "offer", "present", "gesture", "hand", "body language", "communication", "suggest", "recommend", "female"],
        "description": "A woman tipping her hand, often used to present information or offer assistance. Can also represent a sassy or nonchalant attitude in a female context."
    },
    "🙋": {
        "code": "U+1F64B",
        "emoji": "🙋",
        "number": 228,
        "name": "person raising hand",
        "category": "people",
        "subCategory": "person-gesture",
        "tags": ["person", "raising hand", "hand", "raise", "volunteer", "question", "ask", "answer", "gesture", "body language", "communication", "attention", "greeting", "hello", "goodbye"],
        "description": "A person raising their hand. Represents volunteering, asking a question, or greeting someone."
    },
    "🙋‍♂️": {
        "code": "U+1F64B U+200D U+2642 U+FE0F",
        "emoji": "🙋‍♂️",
        "number": 229,
        "name": "man raising hand",
        "category": "people",
        "subCategory": "person-gesture",
        "tags": ["man", "raising hand", "hand", "raise", "volunteer", "question", "ask", "answer", "gesture", "body language", "communication", "attention", "greeting", "hello", "goodbye", "male"],
        "description": "A man raising his hand. Represents volunteering, asking a question, or greeting someone in a male context."
    },
    "🙋‍♀️": {
        "code": "U+1F64B U+200D U+2640 U+FE0F",
        "emoji": "🙋‍♀️",
        "number": 230,
        "name": "woman raising hand",
        "category": "people",
        "subCategory": "person-gesture",
        "tags": ["woman", "raising hand", "hand", "raise", "volunteer", "question", "ask", "answer", "gesture", "body language", "communication", "attention", "greeting", "hello", "goodbye", "female"],
        "description": "A woman raising her hand. Represents volunteering, asking a question, or greeting someone in a female context."
    },
    "🙇": {
        "code": "U+1F647",
        "emoji": "🙇",
        "number": 231,
        "name": "person bowing",
        "category": "people",
        "subCategory": "person-gesture",
        "tags": ["person", "bowing", "bow", "respect", "apology", "thank you", "gratitude", "greeting", "goodbye", "gesture", "body language", "communication", "humble", "polite"],
        "description": "A person bowing. Represents respect, apology, gratitude, or greeting."
    },
    "🙇‍♂️": {
        "code": "U+1F647 U+200D U+2642 U+FE0F",
        "emoji": "🙇‍♂️",
        "number": 232,
        "name": "man bowing",
        "category": "people",
        "subCategory": "person-gesture",
        "tags": ["man", "bowing", "bow", "respect", "apology", "thank you", "gratitude", "greeting", "goodbye", "gesture", "body language", "communication", "humble", "polite", "male"],
        "description": "A man bowing. Represents respect, apology, gratitude, or greeting in a male context."
    },
    "🙇‍♀️": {
        "code": "U+1F647 U+200D U+2640 U+FE0F",
        "emoji": "🙇‍♀️",
        "number": 233,
        "name": "woman bowing",
        "category": "people",
        "subCategory": "person-gesture",
        "tags": ["woman", "bowing", "bow", "respect", "apology", "thank you", "gratitude", "greeting", "goodbye", "gesture", "body language", "communication", "humble", "polite", "female"],
        "description": "A woman bowing. Represents respect, apology, gratitude, or greeting in a female context."
    },
    "🤦": {
        "code": "U+1F926",
        "emoji": "🤦",
        "number": 234,
        "name": "person facepalming",
        "category": "people",
        "subCategory": "person-gesture",
        "tags": ["person", "facepalm", "frustration", "disbelief", "embarrassment", "stupidity", "idiocy", "annoyance", "humor", "funny", "fail", "mistake", "gesture", "body language", "communication"],
        "description": "A person facepalming. Represents frustration, disbelief, embarrassment, or exasperation."
    },
    "🤦‍♂️": {
        "code": "U+1F926 U+200D U+2642 U+FE0F",
        "emoji": "🤦‍♂️",
        "number": 235,
        "name": "man facepalming",
        "category": "people",
        "subCategory": "person-gesture",
        "tags": ["man", "facepalm", "frustration", "disbelief", "embarrassment", "stupidity", "idiocy", "annoyance", "humor", "funny", "fail", "mistake", "gesture", "body language", "communication", "male"],
        "description": "A man facepalming. Represents frustration, disbelief, embarrassment, or exasperation in a male context."
    },
    "🤦‍♀️": {
        "code": "U+1F926 U+200D U+2640 U+FE0F",
        "emoji": "🤦‍♀️",
        "number": 236,
        "name": "woman facepalming",
        "category": "people",
        "subCategory": "person-gesture",
        "tags": ["woman", "facepalm", "frustration", "disbelief", "embarrassment", "stupidity", "idiocy", "annoyance", "humor", "funny", "fail", "mistake", "gesture", "body language", "communication", "female"],
        "description": "A woman facepalming. Represents frustration, disbelief, embarrassment, or exasperation in a female context."
    },
    "🤷": {
        "code": "U+1F937",
        "emoji": "🤷",
        "number": 237,
        "name": "person shrugging",
        "category": "people",
        "subCategory": "person-gesture",
        "tags": ["person", "shrugging", "shrug", "idk", "i don't know", "unsure", "uncertain", "indifferent", "ambivalent", "question", "doubt", "gesture", "body language", "communication", "whatever"],
        "description": "A person shrugging. Represents uncertainty, indifference, or not knowing."
    },
    "🤷‍♂️": {
        "code": "U+1F937 U+200D U+2642 U+FE0F",
        "emoji": "🤷‍♂️",
        "number": 238,
        "name": "man shrugging",
        "category": "people",
        "subCategory": "person-gesture",
        "tags": ["man", "shrugging", "shrug", "idk", "i don't know", "unsure", "uncertain", "indifferent", "ambivalent", "question", "doubt", "gesture", "body language", "communication", "whatever", "male"],
        "description": "A man shrugging. Represents uncertainty, indifference, or not knowing in a male context."
    },
    "🤷‍♀️": {
        "code": "U+1F937 U+200D U+2640 U+FE0F",
        "emoji": "🤷‍♀️",
        "number": 239,
        "name": "woman shrugging",
        "category": "people",
        "subCategory": "person-gesture",
        "tags": ["woman", "shrugging", "shrug", "idk", "i don't know", "unsure", "uncertain", "indifferent", "ambivalent", "question", "doubt", "gesture", "body language", "communication", "whatever", "female"],
        "description": "A woman shrugging. Represents uncertainty, indifference, or not knowing in a female context."
    },
    "👨‍⚕️": {
        "code": "U+1F468 U+200D U+2695 U+FE0F",
        "emoji": "👨‍⚕️",
        "number": 240,
        "name": "man health worker",
        "category": "people",
        "subCategory": "person-role",
        "tags": ["man", "health", "worker", "doctor", "nurse", "physician", "medical", "hospital", "clinic", "healthcare", "medicine", "job", "profession", "male", "male doctor", "male nurse", "health professional", "medical professional", "doctor man", "nurse man"],
        "description": "A man wearing a white coat with a red cross symbol, representing a health worker such as a doctor or nurse."
    },
    "👩‍⚕️": {
        "code": "U+1F469 U+200D U+2695 U+FE0F",
        "emoji": "👩‍⚕️",
        "number": 241,
        "name": "woman health worker",
        "category": "people",
        "subCategory": "person-role",
        "tags": ["woman", "health", "worker", "doctor", "nurse", "physician", "medical", "hospital", "clinic", "healthcare", "medicine", "job", "profession", "female", "female doctor", "female nurse", "health professional", "medical professional", "doctor woman", "nurse woman"],
        "description": "A woman wearing a white coat with a red cross symbol, representing a health worker such as a doctor or nurse."
    },
    "👨‍🎓": {
        "code": "U+1F468 U+200D U+1F393",
        "emoji": "👨‍🎓",
        "number": 242,
        "name": "man student",
        "category": "people",
        "subCategory": "person-role",
        "tags": ["man", "student", "graduation", "education", "school", "college", "university", "cap", "mortarboard", "learning", "study", "male", "male student", "student man", "academic", "degree", "graduate", "class", "knowledge", "studying"],
        "description": "A man wearing a graduation cap, representing a student."
    },
    "👩‍🎓": {
        "code": "U+1F469 U+200D U+1F393",
        "emoji": "👩‍🎓",
        "number": 243,
        "name": "woman student",
        "category": "people",
        "subCategory": "person-role",
        "tags": ["woman", "student", "graduation", "education", "school", "college", "university", "cap", "mortarboard", "learning", "study", "female", "female student", "student woman", "academic", "degree", "graduate", "class", "knowledge", "studying"],
        "description": "A woman wearing a graduation cap, representing a student."
    },
    "👨‍🏫": {
        "code": "U+1F468 U+200D U+1F3EB",
        "emoji": "👨‍🏫",
        "number": 244,
        "name": "man teacher",
        "category": "people",
        "subCategory": "person-role",
        "tags": ["man", "teacher", "education", "school", "professor", "instructor", "teaching", "classroom", "book", "knowledge", "male", "male teacher", "teacher man", "educator", "tutor", "lesson", "study", "learning", "academic", "teacher man"],
        "description": "A man standing at a lectern or holding a book, representing a teacher."
    },
    "👩‍🏫": {
        "code": "U+1F469 U+200D U+1F3EB",
        "emoji": "👩‍🏫",
        "number": 245,
        "name": "woman teacher",
        "category": "people",
        "subCategory": "person-role",
        "tags": ["woman", "teacher", "education", "school", "professor", "instructor", "teaching", "classroom", "book", "knowledge", "female", "female teacher", "teacher woman", "educator", "tutor", "lesson", "study", "learning", "academic", "teacher woman"],
        "description": "A woman standing at a lectern or holding a book, representing a teacher."
    },
    "👨‍⚖️": {
        "code": "U+1F468 U+200D U+2696 U+FE0F",
        "emoji": "👨‍⚖️",
        "number": 246,
        "name": "man judge",
        "category": "people",
        "subCategory": "person-role",
        "tags": ["man", "judge", "law", "court", "justice", "legal", "ruling", "gavel", "scales", "male", "male judge", "judge man", "lawyer", "attorney", "courtroom", "legal system", "judgement", "verdict", "jurisprudence"],
        "description": "A man wearing a judge's robe and possibly holding a gavel, representing a judge."
    },
    "👩‍⚖️": {
        "code": "U+1F469 U+200D U+2696 U+FE0F",
        "emoji": "👩‍⚖️",
        "number": 247,
        "name": "woman judge",
        "category": "people",
        "subCategory": "person-role",
        "tags": ["woman", "judge", "law", "court", "justice", "legal", "ruling", "gavel", "scales", "female", "female judge", "judge woman", "lawyer", "attorney", "courtroom", "legal system", "judgement", "verdict", "jurisprudence"],
        "description": "A woman wearing a judge's robe and possibly holding a gavel, representing a judge."
    },
    "👨‍🌾": {
        "code": "U+1F468 U+200D U+1F33E",
        "emoji": "👨‍🌾",
        "number": 248,
        "name": "man farmer",
        "category": "people",
        "subCategory": "person-role",
        "tags": ["man", "farmer", "agriculture", "farming", "harvest", "field", "tractor", "farm", "crops", "male", "male farmer", "farmer man", "gardening", "rural", "countryside", "cultivation", "produce", "grow", "harvesting", "agriculture"],
        "description": "A man wearing overalls and a hat, possibly holding a pitchfork or other farming implement, representing a farmer."
    },
    "👩‍🌾": {
        "code": "U+1F469 U+200D U+1F33E",
        "emoji": "👩‍🌾",
        "number": 249,
        "name": "woman farmer",
        "category": "people",
        "subCategory": "person-role",
        "tags": ["woman", "farmer", "agriculture", "farming", "harvest", "field", "tractor", "farm", "crops", "female", "female farmer", "farmer woman", "gardening", "rural", "countryside", "cultivation", "produce", "grow", "harvesting", "agriculture"],
        "description": "A woman wearing overalls and a hat, possibly holding a pitchfork or other farming implement, representing a farmer."
    },
    "👨‍🍳": {
        "code": "U+1F468 U+200D U+1F373",
        "emoji": "👨‍🍳",
        "number": 250,
        "name": "man cook",
        "category": "people",
        "subCategory": "person-role",
        "tags": ["man", "cook", "chef", "cooking", "food", "restaurant", "kitchen", "meal", "male", "male cook", "cook man", "baking", "culinary", "cuisine", "food preparation", "recipe", "delicious", "eat", "chef man"],
        "description": "A man wearing a chef's hat, representing a cook or chef."
    },
    "👩‍🍳": {
        "code": "U+1F469 U+200D U+1F373",
        "emoji": "👩‍🍳",
        "number": 251,
        "name": "woman cook",
        "category": "people",
        "subCategory": "person-role",
        "tags": ["woman", "cook", "chef", "cooking", "food", "restaurant", "kitchen", "meal", "female", "female cook", "cook woman", "baking", "culinary", "cuisine", "food preparation", "recipe", "delicious", "eat", "chef woman"],
        "description": "A woman wearing a chef's hat, representing a cook or chef."
    },
    "👨‍🔧": {
        "code": "U+1F468 U+200D U+1F527",
        "emoji": "👨‍🔧",
        "number": 252,
        "name": "man mechanic",
        "category": "people",
        "subCategory": "person-role",
        "tags": ["man", "mechanic", "repair", "car", "auto", "vehicle", "maintenance", "tools", "wrench", "male", "male mechanic", "mechanic man", "engineering", "automotive", "service", "garage", "fix", "motor", "machinery", "technician"],
        "description": "A man wearing overalls and holding a wrench, representing a mechanic."
    },
    "👩‍🔧": {
        "code": "U+1F469 U+200D U+1F527",
        "emoji": "👩‍🔧",
        "number": 253,
        "name": "woman mechanic",
        "category": "people",
        "subCategory": "person-role",
        "tags": ["woman", "mechanic", "repair", "car", "auto", "vehicle", "maintenance", "tools", "wrench", "female", "female mechanic", "mechanic woman", "engineering", "automotive", "service", "garage", "fix", "motor", "machinery", "technician"],
        "description": "A woman wearing overalls and holding a wrench, representing a mechanic."
    },
    "👨‍🏭": {
        "code": "U+1F468 U+200D U+1F3ED",
        "emoji": "👨‍🏭",
        "number": 254,
        "name": "man factory worker",
        "category": "people",
        "subCategory": "person-role",
        "tags": ["man", "factory", "worker", "industry", "manufacturing", "production", "job", "labor", "male", "male factory worker", "factory worker man", "industrial", "plant", "machine", "assembly line", "work", "employment", "blue collar", "manual labor"],
        "description": "A man wearing safety gear, representing a factory worker."
    },
    "👩‍🏭": {
        "code": "U+1F469 U+200D U+1F3ED",
        "emoji": "👩‍🏭",
        "number": 255,
        "name": "woman factory worker",
        "category": "people",
        "subCategory": "person-role",
        "tags": ["woman", "factory", "worker", "industry", "manufacturing", "production", "job", "labor", "female", "female factory worker", "factory worker woman", "industrial", "plant", "machine", "assembly line", "work", "employment", "blue collar", "manual labor"],
        "description": "A woman wearing safety gear, representing a factory worker."
    },
    "👨‍💼": {
        "code": "U+1F468 U+200D U+1F4BC",
        "emoji": "👨‍💼",
        "number": 256,
        "name": "man office worker",
        "category": "people",
        "subCategory": "person-role",
        "tags": ["man", "office", "worker", "business", "job", "work", "desk", "computer", "male", "male office worker", "office worker man", "corporate", "employee", "manager", "professional", "meeting", "paperwork", "cubicle", "tie"],
        "description": "A man wearing a suit and tie, representing an office worker."
    },
    "👩‍💼": {
        "code": "U+1F469 U+200D U+1F4BC",
        "emoji": "👩‍💼",
        "number": 257,
        "name": "woman office worker",
        "category": "people",
        "subCategory": "person-role",
        "tags": ["woman", "office", "worker", "business", "job", "work", "desk", "computer", "female", "female office worker", "office worker woman", "corporate", "employee", "manager", "professional", "meeting", "paperwork", "cubicle", "suit"],
        "description": "A woman wearing a suit, representing an office worker."
    },
    "👨‍🔬": {
        "code": "U+1F468 U+200D U+1F52C",
        "emoji": "👨‍🔬",
        "number": 258,
        "name": "man scientist",
        "category": "people",
        "subCategory": "person-role",
        "tags": ["man", "scientist", "science", "research", "lab", "laboratory", "experiment", "microscope", "male", "male scientist", "scientist man", "chemistry", "biology", "physics", "discovery", "innovation", "technology", "study", "researcher"],
        "description": "A man wearing a lab coat and working with scientific equipment, representing a scientist."
    },
    "👩‍🔬": {
        "code": "U+1F469 U+200D U+1F52C",
        "emoji": "👩‍🔬",
        "number": 259,
        "name": "woman scientist",
        "category": "people",
        "subCategory": "person-role",
        "tags": ["woman", "scientist", "science", "research", "lab", "laboratory", "experiment", "microscope", "female", "female scientist", "scientist woman", "chemistry", "biology", "physics", "discovery", "innovation", "technology", "study", "researcher"],
        "description": "A woman wearing a lab coat and working with scientific equipment, representing a scientist."
    },
    "👨‍💻": {
        "code": "U+1F468 U+200D U+1F4BB",
        "emoji": "👨‍💻",
        "number": 260,
        "name": "man technologist",
        "category": "people",
        "subCategory": "person-role",
        "tags": ["man", "technologist", "technology", "computer", "coding", "programming", "software", "hardware", "male", "male technologist", "technologist man", "developer", "engineer", "IT", "web", "digital", "innovation", "tech", "code"],
        "description": "A man working on a computer, representing a technologist or computer programmer."
    },
    "👩‍💻": {
        "code": "U+1F469 U+200D U+1F4BB",
        "emoji": "👩‍💻",
        "number": 261,
        "name": "woman technologist",
        "category": "people",
        "subCategory": "person-role",
        "tags": ["woman", "technologist", "technology", "computer", "coding", "programming", "software", "hardware", "female", "female technologist", "technologist woman", "developer", "engineer", "IT", "web", "digital", "innovation", "tech", "code"],
        "description": "A woman working on a computer, representing a technologist or computer programmer."
    },
    "👨‍🎤": {
        "code": "U+1F468 U+200D U+1F3A4",
        "emoji": "👨‍🎤",
        "number": 262,
        "name": "man singer",
        "category": "people",
        "subCategory": "person-role",
        "tags": ["man", "singer", "music", "musician", "song", "microphone", "singing", "performance", "male", "male singer", "singer man", "artist", "entertainment", "concert", "stage", "vocal", "melody", "harmony", "rockstar", "pop star"],
        "description": "A man singing into a microphone, representing a singer or musician."
    },
    "👩‍🎤": {
        "code": "U+1F469 U+200D U+1F3A4",
        "emoji": "👩‍🎤",
        "number": 263,
        "name": "woman singer",
        "category": "people",
        "subCategory": "person-role",
        "tags": ["woman", "singer", "music", "musician", "song", "microphone", "singing", "performance", "female", "female singer", "singer woman", "artist", "entertainment", "concert", "stage", "vocal", "melody", "harmony", "rockstar", "pop star"],
        "description": "A woman singing into a microphone, representing a singer or musician."
    },
    "👨‍🎨": {
        "code": "U+1F468 U+200D U+1F3A8",
        "emoji": "👨‍🎨",
        "number": 264,
        "name": "man artist",
        "category": "people",
        "subCategory": "person-role",
        "tags": ["man", "artist", "art", "painting", "drawing", "painter", "creative", "brush", "palette", "male", "male artist", "artist man", "design", "illustration", "sculpture", "gallery", "museum", "masterpiece", "artwork", "artistic"],
        "description": "A man holding a paintbrush or palette, representing an artist."
    },
    "👩‍🎨": {
        "code": "U+1F469 U+200D U+1F3A8",
        "emoji": "👩‍🎨",
        "number": 265,
        "name": "woman artist",
        "category": "people",
        "subCategory": "person-role",
        "tags": ["woman", "artist", "art", "painting", "drawing", "painter", "creative", "brush", "palette", "female", "female artist", "artist woman", "design", "illustration", "sculpture", "gallery", "museum", "masterpiece", "artwork", "artistic"],
        "description": "A woman holding a paintbrush or palette, representing an artist."
    },
    "👨‍✈️": {
        "code": "U+1F468 U+200D U+2708 U+FE0F",
        "emoji": "👨‍✈️",
        "number": 266,
        "name": "man pilot",
        "category": "people",
        "subCategory": "person-role",
        "tags": ["man", "pilot", "airplane", "flight", "aviation", "plane", "cockpit", "male", "male pilot", "pilot man", "fly", "travel", "transportation", "aircraft", "captain", "navigator", "wings", "sky", "jet"],
        "description": "A man wearing a pilot's uniform, representing a pilot."
    },
    "👩‍✈️": {
        "code": "U+1F469 U+200D U+2708 U+FE0F",
        "emoji": "👩‍✈️",
        "number": 267,
        "name": "woman pilot",
        "category": "people",
        "subCategory": "person-role",
        "tags": ["woman", "pilot", "airplane", "flight", "aviation", "plane", "cockpit", "female", "female pilot", "pilot woman", "fly", "travel", "transportation", "aircraft", "captain", "navigator", "wings", "sky", "jet"],
        "description": "A woman wearing a pilot's uniform, representing a pilot."
    },
    "👨‍🚀": {
        "code": "U+1F468 U+200D U+1F680",
        "emoji": "👨‍🚀",
        "number": 268,
        "name": "man astronaut",
        "category": "people",
        "subCategory": "person-role",
        "tags": ["man", "astronaut", "space", "rocket", "nasa", "spacecraft", "male", "male astronaut", "astronaut man", "exploration", "universe", "stars", "galaxy", "mission", "cosmos", "science", "technology", "outer space", "spacewalk"],
        "description": "A man wearing a spacesuit, representing an astronaut."
    },
    "👩‍🚀": {
        "code": "U+1F469 U+200D U+1F680",
        "emoji": "👩‍🚀",
        "number": 269,
        "name": "woman astronaut",
        "category": "people",
        "subCategory": "person-role",
        "tags": ["woman", "astronaut", "space", "rocket", "nasa", "spacecraft", "female", "female astronaut", "astronaut woman", "exploration", "universe", "stars", "galaxy", "mission", "cosmos", "science", "technology", "outer space", "spacewalk"],
        "description": "A woman wearing a spacesuit, representing an astronaut."
    },
    "👨‍🚒": {
        "code": "U+1F468 U+200D U+1F692",
        "emoji": "👨‍🚒",
        "number": 270,
        "name": "man firefighter",
        "category": "people",
        "subCategory": "person-role",
        "tags": ["man", "firefighter", "fire", "rescue", "emergency", "fire truck", "male", "male firefighter", "firefighter man", "fireman", "brave", "hero", "danger", "flames", "smoke", "protection", "fire department", "fire station", "extinguish"],
        "description": "A man wearing firefighter gear, representing a firefighter."
    },
    "👩‍🚒": {
        "code": "U+1F469 U+200D U+1F692",
        "emoji": "👩‍🚒",
        "number": 271,
        "name": "woman firefighter",
        "category": "people",
        "subCategory": "person-role",
        "tags": ["woman", "firefighter", "fire", "rescue", "emergency", "fire truck", "female", "female firefighter", "firefighter woman", "firewoman", "brave", "hero", "danger", "flames", "smoke", "protection", "fire department", "fire station", "extinguish"],
        "description": "A woman wearing firefighter gear, representing a firefighter."
    },
    "👮": {
        "code": "U+1F46E",
        "emoji": "👮",
        "number": 272,
        "name": "police officer",
        "category": "people",
        "subCategory": "person-role",
        "tags": ["police", "officer", "law", "enforcement", "cop", "security", "crime", "justice", "protect", "serve", "uniform", "badge", "patrol", "police officer", "police car", "police station", "arrest", "investigation"],
        "description": "A person wearing a police uniform, representing a police officer."
    },
    "👮‍♂️": {
        "code": "U+1F46E U+200D U+2642 U+FE0F",
        "emoji": "👮‍♂️",
        "number": 273,
        "name": "man police officer",
        "category": "people",
        "subCategory": "person-role",
        "tags": ["man", "police", "officer", "law", "enforcement", "cop", "security", "crime", "justice", "protect", "serve", "uniform", "badge", "patrol", "male", "male police officer", "police man", "police car", "police station", "arrest", "investigation"],
        "description": "A man wearing a police uniform, representing a police officer."
    },
    "👮‍♀️": {
        "code": "U+1F46E U+200D U+2640 U+FE0F",
        "emoji": "👮‍♀️",
        "number": 274,
        "name": "woman police officer",
        "category": "people",
        "subCategory": "person-role",
        "tags": ["woman", "police", "officer", "law", "enforcement", "cop", "security", "crime", "justice", "protect", "serve", "uniform", "badge", "patrol", "female", "female police officer", "police woman", "police car", "police station", "arrest", "investigation"],
        "description": "A woman wearing a police uniform, representing a police officer."
    },
    "🕵": {
        "code": "U+1F575",
        "emoji": "🕵",
        "number": 275,
        "name": "detective",
        "category": "people",
        "subCategory": "person-role",
        "tags": ["detective", "investigator", "crime", "mystery", "clue", "investigation", "secret", "spy", "sleuth", "sherlock", "holmes", "detective work", "detective hat", "magnifying glass", "police", "law", "enforcement"],
        "description": "A person wearing a trench coat and a hat, representing a detective."
    },
    "🕵️‍♂️": {
        "code": "U+1F575 U+FE0F U+200D U+2642 U+FE0F",
        "emoji": "🕵️‍♂️",
        "number": 276,
        "name": "man detective",
        "category": "people",
        "subCategory": "person-role",
        "tags": ["man", "detective", "investigator", "crime", "mystery", "clue", "investigation", "secret", "spy", "sleuth", "sherlock", "holmes", "detective work", "detective hat", "magnifying glass", "police", "law", "enforcement", "male", "male detective", "detective man"],
        "description": "A man wearing a trench coat and a hat, representing a detective."
    },
    "🕵️‍♀️": {
        "code": "U+1F575 U+FE0F U+200D U+2640 U+FE0F",
        "emoji": "🕵️‍♀️",
        "number": 277,
        "name": "woman detective",
        "category": "people",
        "subCategory": "person-role",
        "tags": ["woman", "detective", "investigator", "crime", "mystery", "clue", "investigation", "secret", "spy", "sleuth", "sherlock", "holmes", "detective work", "detective hat", "magnifying glass", "police", "law", "enforcement", "female", "female detective", "detective woman"],
        "description": "A woman wearing a trench coat and a hat, representing a detective."
    },
    "💂": {
        "code": "U+1F482",
        "emoji": "💂",
        "number": 278,
        "name": "guard",
        "category": "people",
        "subCategory": "person-role",
        "tags": ["guard", "security", "protection", "soldier", "military", "royal", "queen", "palace", "uniform", "hat", "bearskin", "buckingham", "london", "uk", "great britain", "guardsman", "watchman"],
        "description": "A person wearing a distinctive uniform with a tall bearskin hat, representing a guard."
    },
    "💂‍♂️": {
        "code": "U+1F482 U+200D U+2642 U+FE0F",
        "emoji": "💂‍♂️",
        "number": 279,
        "name": "man guard",
        "category": "people",
        "subCategory": "person-role",
        "tags": ["man", "guard", "security", "protection", "soldier", "military", "royal", "queen", "palace", "uniform", "hat", "bearskin", "buckingham", "london", "uk", "great britain", "guardsman", "watchman", "male", "male guard", "guard man"],
        "description": "A man wearing a distinctive uniform with a tall bearskin hat, representing a guard."
    },
    "💂‍♀️": {
        "code": "U+1F482 U+200D U+2640 U+FE0F",
        "emoji": "💂‍♀️",
        "number": 280,
        "name": "woman guard",
        "category": "people",
        "subCategory": "person-role",
        "tags": ["woman", "guard", "security", "protection", "soldier", "military", "royal", "queen", "palace", "uniform", "hat", "bearskin", "buckingham", "london", "uk", "great britain", "guardsman", "watchman", "female", "female guard", "guard woman"],
        "description": "A woman wearing a distinctive uniform with a tall bearskin hat, representing a guard."
    },
    "👷": {
        "code": "U+1F477",
        "emoji": "👷",
        "number": 281,
        "name": "construction worker",
        "category": "people",
        "subCategory": "person-role",
        "tags": ["construction", "worker", "building", "hardhat", "tools", "builder", "engineer", "architecture", "site", "job", "work", "helmet", "safety", "construction worker", "building site", "construction site", "hard hat", "tool belt", "hammer"],
        "description": "A person wearing a hard hat, representing a construction worker."
    },
    "👷‍♂️": {
        "code": "U+1F477 U+200D U+2642 U+FE0F",
        "emoji": "👷‍♂️",
        "number": 282,
        "name": "man construction worker",
        "category": "people",
        "subCategory": "person-role",
        "tags": ["man", "construction", "worker", "building", "hardhat", "tools", "builder", "engineer", "architecture", "site", "job", "work", "helmet", "safety", "male", "male construction worker", "construction man", "building site", "construction site", "hard hat", "tool belt", "hammer"],
        "description": "A man wearing a hard hat, representing a construction worker."
    },
    "👷‍♀️": {
        "code": "U+1F477 U+200D U+2640 U+FE0F",
        "emoji": "👷‍♀️",
        "number": 283,
        "name": "woman construction worker",
        "category": "people",
        "subCategory": "person-role",
        "tags": ["woman", "construction", "worker", "building", "hardhat", "tools", "builder", "engineer", "architecture", "site", "job", "work", "helmet", "safety", "female", "female construction worker", "construction woman", "building site", "construction site", "hard hat", "tool belt", "hammer"],
        "description": "A woman wearing a hard hat, representing a construction worker."
    },
    "🤴": {
        "code": "U+1F934",
        "emoji": "🤴",
        "number": 284,
        "name": "prince",
        "category": "people",
        "subCategory": "person",
        "tags": ["prince", "royal", "king", "queen", "crown", "prince charming", "fairytale", "story", "child", "boy", "male", "royalty", "monarchy", "heir", "throne", "castle", "kingdom", "noble", "prince man"],
        "description": "A young man wearing a crown, representing a prince."
    },
    "👸": {
        "code": "U+1F478",
        "emoji": "👸",
        "number": 285,
        "name": "princess",
        "category": "people",
        "subCategory": "person",
        "tags": ["princess", "royal", "king", "queen", "crown", "tiara", "fairytale", "story", "girl", "female", "royalty", "monarchy", "heir", "throne", "castle", "kingdom", "noble", "princess woman"],
        "description": "A young woman wearing a tiara or crown, representing a princess."
    },
    "👳": {
        "code": "U+1F473",
        "emoji": "👳",
        "number": 286,
        "name": "person wearing turban",
        "category": "people",
        "subCategory": "person",
        "tags": ["person", "turban", "headwear", "india", "middle east", "asia", "sikh", "sikhism", "cultural", "traditional", "clothing", "fashion", "accessory", "head covering", "religious", "spiritual", "india culture", "middle east culture"],
        "description": "A person wearing a turban, a type of headwear commonly worn in some cultures."
    },
    "👳‍♂️": {
        "code": "U+1F473 U+200D U+2642 U+FE0F",
        "emoji": "👳‍♂️",
        "number": 287,
        "name": "man wearing turban",
        "category": "people",
        "subCategory": "person",
        "tags": ["man", "turban", "headwear", "india", "middle east", "asia", "sikh", "sikhism", "cultural", "traditional", "clothing", "fashion", "accessory", "head covering", "religious", "spiritual", "male", "india culture", "middle east culture", "man turban"],
        "description": "A man wearing a turban, a type of headwear commonly worn in some cultures."
    },
    "👳‍♀️": {
        "code": "U+1F473 U+200D U+2640 U+FE0F",
        "emoji": "👳‍♀️",
        "number": 288,
        "name": "woman wearing turban",
        "category": "people",
        "subCategory": "person",
        "tags": ["woman", "turban", "headwear", "india", "middle east", "asia", "sikh", "sikhism", "cultural", "traditional", "clothing", "fashion", "accessory", "head covering", "religious", "spiritual", "female", "india culture", "middle east culture", "woman turban"],
        "description": "A woman wearing a turban, a type of headwear commonly worn in some cultures."
    },
    "👲": {
        "code": "U+1F472",
        "emoji": "👲",
        "number": 289,
        "name": "man with Chinese cap",
        "category": "people",
        "subCategory": "person",
        "tags": ["man", "chinese", "cap", "hat", "china", "asian", "traditional", "clothing", "headwear", "male", "chinese cap", "man cap", "oriental", "asia", "culture", "fashion"],
        "description": "A man wearing a traditional Chinese cap."
    },
    "🧕": {
        "code": "U+1F9D5",
        "emoji": "🧕",
        "number": 290,
        "name": "woman with headscarf",
        "category": "people",
        "subCategory": "person",
        "tags": ["woman", "headscarf", "hijab", "muslim", "islam", "religious", "cultural", "head covering", "female", "islamic", "modest", "dress", "fashion", "accessory", "headwear", "woman headscarf", "muslim woman"],
        "description": "A woman wearing a headscarf."
    },
    "🤵": {
        "code": "U+1F935",
        "emoji": "🤵",
        "number": 291,
        "name": "man in tuxedo",
        "category": "people",
        "subCategory": "person",
        "tags": ["man", "tuxedo", "suit", "formal", "dress", "wedding", "groom", "party", "celebration", "male", "bow tie", "black tie", "fancy", "elegant", "gentleman", "man tuxedo", "special occasion"],
        "description": "A man wearing a tuxedo, typically for a formal event."
    },
    "👰": {
        "code": "U+1F470",
        "emoji": "👰",
        "number": 292,
        "name": "bride with veil",
        "category": "people",
        "subCategory": "person",
        "tags": ["bride", "wedding", "marriage", "veil", "dress", "wedding dress", "love", "romance", "celebration", "female", "bride with veil", "wedding day", "bridal", "just married", "nuptials", "matrimony", "wedding ceremony"],
        "description": "A woman wearing a wedding dress and veil, representing a bride."
    },
    "🤰": {
        "code": "U+1F930",
        "emoji": "🤰",
        "number": 293,
        "name": "pregnant woman",
        "category": "people",
        "subCategory": "person",
        "tags": ["pregnant", "woman", "pregnancy", "baby", "mother", "family", "child", "newborn", "birth", "female", "expecting", "prenatal", "parenting", "pregnant woman", "motherhood", "gestation", "due date"],
        "description": "A woman who is pregnant."
    },
    "🤱": {
        "code": "U+1F931",
        "emoji": "🤱",
        "number": 294,
        "name": "breast-feeding",
        "category": "people",
        "subCategory": "person",
        "tags": ["breastfeeding", "nursing", "baby", "mother", "child", "newborn", "infant", "milk", "feeding", "mom", "parenting", "breast-feeding", "breast milk", "nurturing", "motherhood", "newborn care", "infant care"],
        "description": "A woman breastfeeding a baby."
    },
    "👼": {
        "code": "U+1F47C",
        "emoji": "👼",
        "number": 295,
        "name": "baby angel",
        "category": "people",
        "subCategory": "person-fantasy",
        "tags": ["angel", "baby", "wings", "halo", "heaven", "innocent", "pure", "divine", "cherub", "religious", "christmas", "cupid", "love", "guardian", "spirit", "angel baby", "heavenly", "cute angel", "baby angel wings"],
        "description": "A baby with wings and a halo, representing an angel."
    },
    "🎅": {
        "code": "U+1F385",
        "emoji": "🎅",
        "number": 296,
        "name": "Santa Claus",
        "category": "people",
        "subCategory": "person-fantasy",
        "tags": ["santa", "claus", "christmas", "holiday", "winter", "gifts", "presents", "jolly", "father christmas", "north pole", "sleigh", "reindeer", "chimney", "ho ho ho", "merry christmas", "santa claus emoji", "christmas eve", "christmas spirit", "christmas time"],
        "description": "A jolly old man with a white beard and red suit, representing Santa Claus."
    },
    "🤶": {
        "code": "U+1F936",
        "emoji": "🤶",
        "number": 297,
        "name": "Mrs. Claus",
        "category": "people",
        "subCategory": "person-fantasy",
        "tags": ["mrs claus", "santa", "christmas", "holiday", "winter", "gifts", "presents", "mother christmas", "north pole", "sleigh", "reindeer", "chimney", "merry christmas", "mrs claus emoji", "christmas eve", "christmas spirit", "christmas time", "santa's wife", "missus claus"],
        "description": "A woman with white hair and glasses, wearing a red dress, representing Mrs. Claus."
    },
    "🦸": {
        "code": "U+1F9B8",
        "emoji": "🦸",
        "number": 298,
        "name": "superhero",
        "category": "people",
        "subCategory": "person-fantasy",
        "tags": ["superhero", "hero", "cape", "mask", "powers", "strength", "flight", "superpowers", "comic", "book", "movie", "justice", "good", "evil", "rescue", "save", "superhero emoji", "heroic", "super human"],
        "description": "A person wearing a cape and mask, representing a superhero."
    },
    "🦸‍♂️": {
        "code": "U+1F9B8 U+200D U+2642 U+FE0F",
        "emoji": "🦸‍♂️",
        "number": 299,
        "name": "man superhero",
        "category": "people",
        "subCategory": "person-fantasy",
        "tags": ["man", "superhero", "hero", "cape", "mask", "powers", "strength", "flight", "superpowers", "comic", "book", "movie", "justice", "good", "evil", "rescue", "save", "male", "male superhero", "superhero man", "heroic", "super human"],
        "description": "A man wearing a cape and mask, representing a superhero."
    },
    "🦸‍♀️": {
        "code": "U+1F9B8 U+200D U+2640 U+FE0F",
        "emoji": "🦸‍♀️",
        "number": 300,
        "name": "woman superhero",
        "category": "people",
        "subCategory": "person-fantasy",
        "tags": ["woman", "superhero", "hero", "cape", "mask", "powers", "strength", "flight", "superpowers", "comic", "book", "movie", "justice", "good", "evil", "rescue", "save", "female", "female superhero", "superhero woman", "heroic", "super human"],
        "description": "A woman wearing a cape and mask, representing a superhero."
    },
    "🦹": {
        "code": "U+1F9B9",
        "emoji": "🦹",
        "number": 301,
        "name": "supervillain",
        "category": "people",
        "subCategory": "person-fantasy",
        "tags": ["supervillain", "villain", "evil", "bad", "criminal", "powers", "superpowers", "comic", "book", "movie", "wicked", "bad guy", "antagonist", "nemesis", "supervillain emoji", "villainous", "super human"],
        "description": "A person with an evil expression, representing a supervillain."
    },
    "🦹‍♂️": {
        "code": "U+1F9B9 U+200D U+2642 U+FE0F",
        "emoji": "🦹‍♂️",
        "number": 302,
        "name": "man supervillain",
        "category": "people",
        "subCategory": "person-fantasy",
        "tags": ["man", "supervillain", "villain", "evil", "bad", "criminal", "powers", "superpowers", "comic", "book", "movie", "wicked", "bad guy", "antagonist", "nemesis", "male", "male supervillain", "supervillain man", "villainous", "super human"],
        "description": "A man with an evil expression, representing a supervillain."
    },
    "🦹‍♀️": {
        "code": "U+1F9B9 U+200D U+2640 U+FE0F",
        "emoji": "🦹‍♀️",
        "number": 303,
        "name": "woman supervillain",
        "category": "people",
        "subCategory": "person-fantasy",
        "tags": ["woman", "supervillain", "villain", "evil", "bad", "criminal", "powers", "superpowers", "comic", "book", "movie", "wicked", "bad guy", "antagonist", "nemesis", "female", "female supervillain", "supervillain woman", "villainous", "super human"],
        "description": "A woman with an evil expression, representing a supervillain."
    },
    "🧙": {
        "code": "U+1F9D9",
        "emoji": "🧙",
        "number": 304,
        "name": "mage",
        "category": "people",
        "subCategory": "person-fantasy",
        "tags": ["mage", "wizard", "witch", "magic", "sorcerer", "sorceress", "spell", "potion", "wand", "fantasy", "mythical", "magical", "enchantment", "mage emoji", "wizard emoji", "witch emoji", "magic user"],
        "description": "A person with magical powers, who can cast spells."
    },
    "🧙‍♂️": {
        "code": "U+1F9D9 U+200D U+2642 U+FE0F",
        "emoji": "🧙‍♂️",
        "number": 305,
        "name": "man mage",
        "category": "people",
        "subCategory": "person-fantasy",
        "tags": ["man", "mage", "wizard", "magic", "sorcerer", "spell", "potion", "wand", "fantasy", "mythical", "magical", "enchantment", "male", "male mage", "mage man", "wizard man", "magic user"],
        "description": "A man with magical powers, who can cast spells."
    },
    "🧙‍♀️": {
        "code": "U+1F9D9 U+200D U+2640 U+FE0F",
        "emoji": "🧙‍♀️",
        "number": 306,
        "name": "woman mage",
        "category": "people",
        "subCategory": "person-fantasy",
        "tags": ["woman", "mage", "witch", "magic", "sorceress", "spell", "potion", "wand", "fantasy", "mythical", "magical", "enchantment", "female", "female mage", "mage woman", "witch woman", "magic user"],
        "description": "A woman with magical powers, who can cast spells."
    },
    "🧚": {
        "code": "U+1F9DA",
        "emoji": "🧚",
        "number": 307,
        "name": "fairy",
        "category": "people",
        "subCategory": "person-fantasy",
        "tags": ["fairy", "magical", "wings", "fantasy", "mythical", "nature", "enchantment", "pixie", "sprite", "fairy dust", "fairy tale", "fairy emoji", "magical creature", "fairy wings"],
        "description": "A small magical creature with wings, often depicted as helpful and kind."
    },
    "🧚‍♂️": {
        "code": "U+1F9DA U+200D U+2642 U+FE0F",
        "emoji": "🧚‍♂️",
        "number": 308,
        "name": "man fairy",
        "category": "people",
        "subCategory": "person-fantasy",
        "tags": ["man", "fairy", "magical", "wings", "fantasy", "mythical", "nature", "enchantment", "pixie", "sprite", "fairy dust", "fairy tale", "male", "male fairy", "fairy man", "magical creature", "fairy wings"],
        "description": "A male fairy with wings."
    },
    "🧚‍♀️": {
        "code": "U+1F9DA U+200D U+2640 U+FE0F",
        "emoji": "🧚‍♀️",
        "number": 309,
        "name": "woman fairy",
        "category": "people",
        "subCategory": "person-fantasy",
        "tags": ["woman", "fairy", "magical", "wings", "fantasy", "mythical", "nature", "enchantment", "pixie", "sprite", "fairy dust", "fairy tale", "female", "female fairy", "fairy woman", "magical creature", "fairy wings"],
        "description": "A female fairy with wings."
    },
    "🧛": {
        "code": "U+1F9DB",
        "emoji": "🧛",
        "number": 310,
        "name": "vampire",
        "category": "people",
        "subCategory": "person-fantasy",
        "tags": ["vampire", "undead", "blood", "fangs", "night", "gothic", "horror", "monster", "dracula", "vampire emoji", "vampire bat", "coffin", "dark", "supernatural", "mythical creature"],
        "description": "A vampire, a mythical creature that often drinks blood."
    },
    "🧛‍♂️": {
        "code": "U+1F9DB U+200D U+2642 U+FE0F",
        "emoji": "🧛‍♂️",
        "number": 311,
        "name": "man vampire",
        "category": "people",
        "subCategory": "person-fantasy",
        "tags": ["man", "vampire", "undead", "blood", "fangs", "night", "gothic", "horror", "monster", "dracula", "male", "male vampire", "vampire man", "vampire bat", "coffin", "dark", "supernatural", "mythical creature"],
        "description": "A male vampire."
    },
    "🧛‍♀️": {
        "code": "U+1F9DB U+200D U+2640 U+FE0F",
        "emoji": "🧛‍♀️",
        "number": 312,
        "name": "woman vampire",
        "category": "people",
        "subCategory": "person-fantasy",
        "tags": ["woman", "vampire", "undead", "blood", "fangs", "night", "gothic", "horror", "monster", "dracula", "female", "female vampire", "vampire woman", "vampire bat", "coffin", "dark", "supernatural", "mythical creature"],
        "description": "A female vampire."
    },
    "🧜": {
        "code": "U+1F9DC",
        "emoji": "🧜",
        "number": 313,
        "name": "merperson",
        "category": "people",
        "subCategory": "person-fantasy",
        "tags": ["merperson", "mermaid", "merman", "sea", "ocean", "mythical", "creature", "fish", "tail", "water", "fantasy", "mermaid emoji", "merman emoji", "aquatic", "mythology", "folklore", "siren"],
        "description": "A mythical creature with the upper body of a human and the tail of a fish."
    },
    "🧜‍♂️": {
        "code": "U+1F9DC U+200D U+2642 U+FE0F",
        "emoji": "🧜‍♂️",
        "number": 314,
        "name": "merman",
        "category": "people",
        "subCategory": "person-fantasy",
        "tags": ["merman", "merperson", "sea", "ocean", "mythical", "creature", "fish", "tail", "water", "fantasy", "male", "merman emoji", "aquatic", "mythology", "folklore", "triton"],
        "description": "A male merperson."
    },
    "🧜‍♀️": {
        "code": "U+1F9DC U+200D U+2640 U+FE0F",
        "emoji": "🧜‍♀️",
        "number": 315,
        "name": "mermaid",
        "category": "people",
        "subCategory": "person-fantasy",
        "tags": ["mermaid", "merperson", "sea", "ocean", "mythical", "creature", "fish", "tail", "water", "fantasy", "female", "mermaid emoji", "aquatic", "mythology", "folklore", "siren"],
        "description": "A female merperson."
    },
    "🧝": {
        "code": "U+1F9DD",
        "emoji": "🧝",
        "number": 316,
        "name": "elf",
        "category": "people",
        "subCategory": "person-fantasy",
        "tags": ["elf", "magical", "fantasy", "mythical", "nature", "forest", "magic", "elf emoji", "elf ears", "fantasy creature", "lord of the rings", "tolkien", "mythology", "folklore"],
        "description": "A mythical creature with pointed ears, often depicted as living in forests and having magical powers."
    },
    "🧝‍♂️": {
        "code": "U+1F9DD U+200D U+2642 U+FE0F",
        "emoji": "🧝‍♂️",
        "number": 317,
        "name": "man elf",
        "category": "people",
        "subCategory": "person-fantasy",
        "tags": ["man", "elf", "magical", "fantasy", "mythical", "nature", "forest", "magic", "male", "male elf", "elf man", "elf ears", "fantasy creature", "lord of the rings", "tolkien", "mythology", "folklore"],
        "description": "A male elf."
    },
    "🧝‍♀️": {
        "code": "U+1F9DD U+200D U+2640 U+FE0F",
        "emoji": "🧝‍♀️",
        "number": 318,
        "name": "woman elf",
        "category": "people",
        "subCategory": "person-fantasy",
        "tags": ["woman", "elf", "magical", "fantasy", "mythical", "nature", "forest", "magic", "female", "female elf", "elf woman", "elf ears", "fantasy creature", "lord of the rings", "tolkien", "mythology", "folklore"],
        "description": "A female elf."
    },
    "🧞": {
        "code": "U+1F9DE",
        "emoji": "🧞",
        "number": 319,
        "name": "genie",
        "category": "people",
        "subCategory": "person-fantasy",
        "tags": ["genie", "magical", "wish", "lamp", "bottle", "fantasy", "mythical", "genie emoji", "magical creature", "aladdin", "arabian nights", "folklore", "mythology"],
        "description": "A magical being that grants wishes, often associated with a lamp or bottle."
    },
    "🧞‍♂️": {
        "code": "U+1F9DE U+200D U+2642 U+FE0F",
        "emoji": "🧞‍♂️",
        "number": 320,
        "name": "man genie",
        "category": "people",
        "subCategory": "person-fantasy",
        "tags": ["man", "genie", "magical", "wish", "lamp", "bottle", "fantasy", "mythical", "male", "male genie", "genie man", "magical creature", "aladdin", "arabian nights", "folklore", "mythology"],
        "description": "A male genie."
    },
    "🧞‍♀️": {
        "code": "U+1F9DE U+200D U+2640 U+FE0F",
        "emoji": "🧞‍♀️",
        "number": 321,
        "name": "woman genie",
        "category": "people",
        "subCategory": "person-fantasy",
        "tags": ["woman", "genie", "magical", "wish", "lamp", "bottle", "fantasy", "mythical", "female", "female genie", "genie woman", "magical creature", "aladdin", "arabian nights", "folklore", "mythology"],
        "description": "A female genie."
    },
    "🧟": {
        "code": "U+1F9DF",
        "emoji": "🧟",
        "number": 322,
        "name": "zombie",
        "category": "people",
        "subCategory": "person-fantasy",
        "tags": ["zombie", "undead", "monster", "horror", "walking dead", "brain", "ghoul", "living dead", "zombie emoji", "halloween", "spooky", "scary", "creepy", "apocalypse", "monster"],
        "description": "A zombie, an undead creature often depicted as being slow and rotting."
    },
    "🧟‍♂️": {
        "code": "U+1F9DF U+200D U+2642 U+FE0F",
        "emoji": "🧟‍♂️",
        "number": 323,
        "name": "man zombie",
        "category": "people",
        "subCategory": "person-fantasy",
        "tags": ["man", "zombie", "undead", "monster", "horror", "walking dead", "brain", "ghoul", "living dead", "male", "male zombie", "zombie man", "halloween", "spooky", "scary", "creepy", "apocalypse", "monster"],
        "description": "A male zombie."
    },
    "🧟‍♀️": {
        "code": "U+1F9DF U+200D U+2640 U+FE0F",
        "emoji": "🧟‍♀️",
        "number": 324,
        "name": "woman zombie",
        "category": "people",
        "subCategory": "person-fantasy",
        "tags": ["woman", "zombie", "undead", "monster", "horror", "walking dead", "brain", "ghoul", "living dead", "female", "female zombie", "zombie woman", "halloween", "spooky", "scary", "creepy", "apocalypse", "monster"],
        "description": "A female zombie."
    },
    "💆": {
        "code": "U+1F486",
        "emoji": "💆",
        "number": 325,
        "name": "person getting massage",
        "category": "people",
        "subCategory": "person-activity",
        "tags": ["massage", "spa", "relaxation", "wellness", "therapy", "massage therapy", "pamper", "beauty", "health", "self care", "massage emoji", "body", "treatment", "rejuvenation", "stress relief", "well-being", "relaxation therapy", "massage session", "body massage"],
        "description": "A person receiving a massage."
    },
    "💆‍♂️": {
        "code": "U+1F486 U+200D U+2642 U+FE0F",
        "emoji": "💆‍♂️",
        "number": 326,
        "name": "man getting massage",
        "category": "people",
        "subCategory": "person-activity",
        "tags": ["man", "massage", "spa", "relaxation", "wellness", "therapy", "massage therapy", "pamper", "beauty", "health", "self care", "male", "male massage", "massage man", "body", "treatment", "rejuvenation", "stress relief", "well-being", "relaxation therapy", "massage session", "body massage"],
        "description": "A man receiving a massage."
    },
    "💆‍♀️": {
        "code": "U+1F486 U+200D U+2640 U+FE0F",
        "emoji": "💆‍♀️",
        "number": 327,
        "name": "woman getting massage",
        "category": "people",
        "subCategory": "person-activity",
        "tags": ["woman", "massage", "spa", "relaxation", "wellness", "therapy", "massage therapy", "pamper", "beauty", "health", "self care", "female", "female massage", "massage woman", "body", "treatment", "rejuvenation", "stress relief", "well-being", "relaxation therapy", "massage session", "body massage"],
        "description": "A woman receiving a massage."
    },
    "💇": {
        "code": "U+1F487",
        "emoji": "💇",
        "number": 328,
        "name": "person getting haircut",
        "category": "people",
        "subCategory": "person-activity",
        "tags": ["haircut", "hair", "salon", "barber", "hairstyle", "cut", "hairdresser", "beauty", "style", "grooming", "hair salon", "hair styling", "hair cut", "hairdressing", "hair care", "hair stylist", "hairdo", "hair salon", "hairdresser"],
        "description": "A person getting a haircut."
    },
    "💇‍♂️": {
        "code": "U+1F487 U+200D U+2642 U+FE0F",
        "emoji": "💇‍♂️",
        "number": 329,
        "name": "man getting haircut",
        "category": "people",
        "subCategory": "person-activity",
        "tags": ["man", "haircut", "hair", "salon", "barber", "hairstyle", "cut", "hairdresser", "beauty", "style", "grooming", "male", "male haircut", "haircut man", "hair salon", "hair styling", "hair cut", "hairdressing", "hair care", "hair stylist", "hairdo", "hair salon", "hairdresser"],
        "description": "A man getting a haircut."
    },
    "💇‍♀️": {
        "code": "U+1F487 U+200D U+2640 U+FE0F",
        "emoji": "💇‍♀️",
        "number": 330,
        "name": "woman getting haircut",
        "category": "people",
        "subCategory": "person-activity",
        "tags": ["woman", "haircut", "hair", "salon", "hairdresser", "hairstyle", "cut", "beauty", "style", "grooming", "female", "female haircut", "haircut woman", "hair salon", "hair styling", "hair cut", "hairdressing", "hair care", "hair stylist", "hairdo", "hair salon", "hairdresser"],
        "description": "A woman getting a haircut."
    },
    "🚶": {
        "code": "U+1F6B6",
        "emoji": "🚶",
        "number": 331,
        "name": "person walking",
        "category": "people",
        "subCategory": "person-activity",
        "tags": ["walking", "walk", "person", "movement", "exercise", "travel", "leisure", "activity", "walk emoji", "walking person", "going", "stroll", "hike", "trek", "ambulation", "perambulation", "saunter", "amble"],
        "description": "A person walking."
    },
    "🚶‍♂️": {
        "code": "U+1F6B6 U+200D U+2642 U+FE0F",
        "emoji": "🚶‍♂️",
        "number": 332,
        "name": "man walking",
        "category": "people",
        "subCategory": "person-activity",
        "tags": ["man", "walking", "walk", "person", "movement", "exercise", "travel", "leisure", "activity", "male", "male walking", "walking man", "going", "stroll", "hike", "trek", "ambulation", "perambulation", "saunter", "amble"],
        "description": "A man walking."
    },
    "🚶‍♀️": {
        "code": "U+1F6B6 U+200D U+2640 U+FE0F",
        "emoji": "🚶‍♀️",
        "number": 333,
        "name": "woman walking",
        "category": "people",
        "subCategory": "person-activity",
        "tags": ["woman", "walking", "walk", "person", "movement", "exercise", "travel", "leisure", "activity", "female", "female walking", "walking woman", "going", "stroll", "hike", "trek", "ambulation", "perambulation", "saunter", "amble"],
        "description": "A woman walking."
    },
    "🏃": {
        "code": "U+1F3C3",
        "emoji": "🏃",
        "number": 334,
        "name": "person running",
        "category": "people",
        "subCategory": "person-activity",
        "tags": ["running", "run", "jogging", "exercise", "fitness", "sport", "marathon", "race", "speed", "athletic", "runner", "run emoji", "running person", "workout", "cardio", "jog"],
        "description": "A person running."
    },
    "🏃‍♂️": {
        "code": "U+1F3C3 U+200D U+2642 U+FE0F",
        "emoji": "🏃‍♂️",
        "number": 335,
        "name": "man running",
        "category": "people",
        "subCategory": "person-activity",
        "tags": ["man", "running", "run", "jogging", "exercise", "fitness", "sport", "marathon", "race", "speed", "athletic", "runner", "male", "male running", "running man", "workout", "cardio", "jog"],
        "description": "A man running."
    },
    "🏃‍♀️": {
        "code": "U+1F3C3 U+200D U+2640 U+FE0F",
        "emoji": "🏃‍♀️",
        "number": 336,
        "name": "woman running",
        "category": "people",
        "subCategory": "person-activity",
        "tags": ["woman", "running", "run", "jogging", "exercise", "fitness", "sport", "marathon", "race", "speed", "athletic", "runner", "female", "female running", "running woman", "workout", "cardio", "jog"],
        "description": "A woman running."
    },
    "💃": {
        "code": "U+1F483",
        "emoji": "💃",
        "number": 337,
        "name": "woman dancing",
        "category": "people",
        "subCategory": "person-activity",
        "tags": ["woman", "dancing", "dance", "party", "fun", "celebration", "music", "female", "female dancer", "dancer woman", "dancing woman", "salsa", "ballet", "disco", "ballroom", "rhythm", "move", "groove", "dancing emoji"],
        "description": "A woman dancing, with one arm raised."
    },
    "🕺": {
        "code": "U+1F57A",
        "emoji": "🕺",
        "number": 338,
        "name": "man dancing",
        "category": "people",
        "subCategory": "person-activity",
        "tags": ["man", "dancing", "dance", "party", "fun", "celebration", "music", "male", "male dancer", "dancer man", "dancing man", "disco", "groove", "move", "rhythm", "dancing emoji"],
        "description": "A man dancing with his arms raised."
    },
    "🕴": {
        "code": "U+1F574",
        "emoji": "🕴",
        "number": 339,
        "name": "man in suit levitating",
        "category": "people",
        "subCategory": "person-activity",
        "tags": ["man", "suit", "levitating", "floating", "business", "formal", "magic", "🕴️ emoji", "levitating man", "floating man", "zero gravity", "anti-gravity", "suit man"],
        "description": "A man in a suit levitating, as if defying gravity."
    },
    "👯": {
        "code": "U+1F46F",
        "emoji": "👯",
        "number": 340,
        "name": "people with bunny ears",
        "category": "people",
        "subCategory": "person-activity",
        "tags": ["bunny ears", "dancing", "party", "fun", "celebration", "costume", "👯 emoji", "dancing people", "party people", "bunny ear", "rabbit ears"],
        "description": "Two people wearing bunny ears, often used to represent dancing or partying."
    },
    "👯‍♂️": {
        "code": "U+1F46F U+200D U+2642 U+FE0F",
        "emoji": "👯‍♂️",
        "number": 341,
        "name": "men with bunny ears",
        "category": "people",
        "subCategory": "person-activity",
        "tags": ["men", "bunny ears", "dancing", "party", "fun", "celebration", "costume", "male", "👯‍♂️ emoji", "dancing men", "party men", "bunny ear", "rabbit ears"],
        "description": "Two men wearing bunny ears."
    },
    "👯‍♀️": {
        "code": "U+1F46F U+200D U+2640 U+FE0F",
        "emoji": "👯‍♀️",
        "number": 342,
        "name": "women with bunny ears",
        "category": "people",
        "subCategory": "person-activity",
        "tags": ["women", "bunny ears", "dancing", "party", "fun", "celebration", "costume", "female", "👯‍♀️ emoji", "dancing women", "party women", "bunny ear", "rabbit ears"],
        "description": "Two women wearing bunny ears."
    },
    "🧖": {
        "code": "U+1F9D6",
        "emoji": "🧖",
        "number": 343,
        "name": "person in steamy room",
        "category": "people",
        "subCategory": "person-activity",
        "tags": ["steamy room", "sauna", "steam", "relaxation", "wellness", "health", "🧖 emoji", "sauna person", "steam room", "spa", "heat", "sweating", "detox", "self care"],
        "description": "A person in a steamy room, such as a sauna."
    },
    "🧖‍♂️": {
        "code": "U+1F9D6 U+200D U+2642 U+FE0F",
        "emoji": "🧖‍♂️",
        "number": 344,
        "name": "man in steamy room",
        "category": "people",
        "subCategory": "person-activity",
        "tags": ["man", "steamy room", "sauna", "steam", "relaxation", "wellness", "health", "male", "🧖‍♂️ emoji", "sauna man", "steam room", "spa", "heat", "sweating", "detox", "self care"],
        "description": "A man in a steamy room."
    },
    "🧖‍♀️": {
        "code": "U+1F9D6 U+200D U+2640 U+FE0F",
        "emoji": "🧖‍♀️",
        "number": 345,
        "name": "woman in steamy room",
        "category": "people",
        "subCategory": "person-activity",
        "tags": ["woman", "steamy room", "sauna", "steam", "relaxation", "wellness", "health", "female", "🧖‍♀️ emoji", "sauna woman", "steam room", "spa", "heat", "sweating", "detox", "self care"],
        "description": "A woman in a steamy room."
    },
    "🧗": {
        "code": "U+1F9D7",
        "emoji": "🧗",
        "number": 346,
        "name": "person climbing",
        "category": "people",
        "subCategory": "person-activity",
        "tags": ["climbing", "rock climbing", "mountain climbing", "sport", "adventure", "challenge", "🧗 emoji", "climbing person", "climber", "rock climber", "mountain climber", "bouldering", "climbing wall", "outdoor activity", "climbing gear", "rope"],
        "description": "A person climbing."
    },
    "🧗‍♂️": {
        "code": "U+1F9D7 U+200D U+2642 U+FE0F",
        "emoji": "🧗‍♂️",
        "number": 347,
        "name": "man climbing",
        "category": "people",
        "subCategory": "person-activity",
        "tags": ["man", "climbing", "rock climbing", "mountain climbing", "sport", "adventure", "challenge", "male", "🧗‍♂️ emoji", "climbing man", "climber", "rock climber", "mountain climber", "bouldering", "climbing wall", "outdoor activity", "climbing gear", "rope"],
        "description": "A man climbing."
    },
    "🧗‍♀️": {
        "code": "U+1F9D7 U+200D U+2640 U+FE0F",
        "emoji": "🧗‍♀️",
        "number": 348,
        "name": "woman climbing",
        "category": "people",
        "subCategory": "person-activity",
        "tags": ["woman", "climbing", "rock climbing", "mountain climbing", "sport", "adventure", "challenge", "female", "🧗‍♀️ emoji", "climbing woman", "climber", "rock climber", "mountain climber", "bouldering", "climbing wall", "outdoor activity", "climbing gear", "rope"],
        "description": "A woman climbing."
    },
    "🤺": {
        "code": "U+1F93A",
        "emoji": "🤺",
        "number": 349,
        "name": "person fencing",
        "category": "people",
        "subCategory": "person-sport",
        "tags": ["fencing", "sport", "sword", "duel", "olympics", "competition", "fencer", "🤺 emoji", "foil", "epee", "sabre", "combat", "fight", "skill", "athletic", "exercise", "fencing sport"],
        "description": "A person fencing with a sword."
    },
    "🏇": {
        "code": "U+1F3C7",
        "emoji": "🏇",
        "number": 350,
        "name": "horse racing",
        "category": "people",
        "subCategory": "person-sport",
        "tags": ["horse racing", "horse", "race", "jockey", "sport", "equestrian", "🏇 emoji", "horseback riding", "gallop", "thoroughbred", "competition", "fast", "speed", "animal", "racing", "horse race"],
        "description": "A horse and rider racing."
    },
    "⛷": {
        "code": "U+26F7",
        "emoji": "⛷",
        "number": 351,
        "name": "skier",
        "category": "people",
        "subCategory": "person-sport",
        "tags": ["skier", "skiing", "ski", "snow", "winter", "sport", "alpine", "downhill", "slalom", "powder", "snowboarding", "⛷️ emoji", "ski resort", "winter sport", "snow sport", "skiing emoji"],
        "description": "A person skiing."
    },
    "🏂": {
        "code": "U+1F3C2",
        "emoji": "🏂",
        "number": 352,
        "name": "snowboarder",
        "category": "people",
        "subCategory": "person-sport",
        "tags": ["snowboarder", "snowboarding", "snowboard", "snow", "winter", "sport", "🏂 emoji", "snowboarding emoji", "winter sport", "snow sport", "shredding", "halfpipe", "freestyle", "mountain", "snowboarder emoji"],
        "description": "A person snowboarding."
    },
    "🏌": {
        "code": "U+1F3CC",
        "emoji": "🏌",
        "number": 353,
        "name": "person golfing",
        "category": "people",
        "subCategory": "person-sport",
        "tags": ["golfing", "golf", "golfer", "sport", "golf club", "golf ball", "tee", "green", "fairway", "putt", "swing", "🏌️ emoji", "golf course", "golfing emoji", "golfing sport", "golfing man"],
        "description": "A person golfing."
    },
    "🏌️‍♂️": {
        "code": "U+1F3CC U+FE0F U+200D U+2642 U+FE0F",
        "emoji": "🏌️‍♂️",
        "number": 354,
        "name": "man golfing",
        "category": "people",
        "subCategory": "person-sport",
        "tags": ["man", "golfing", "golf", "golfer", "sport", "golf club", "golf ball", "tee", "green", "fairway", "putt", "swing", "male", "🏌️‍♂️ emoji", "golf course", "golfing emoji", "golfing sport", "golfing man"],
        "description": "A man golfing."
    },
    "🏌️‍♀️": {
        "code": "U+1F3CC U+FE0F U+200D U+2640 U+FE0F",
        "emoji": "🏌️‍♀️",
        "number": 355,
        "name": "woman golfing",
        "category": "people",
        "subCategory": "person-sport",
        "tags": ["woman", "golfing", "golf", "golfer", "sport", "golf club", "golf ball", "tee", "green", "fairway", "putt", "swing", "female", "🏌️‍♀️ emoji", "golf course", "golfing emoji", "golfing sport", "golfing woman"],
        "description": "A woman golfing."
    },
    "🏄": {
        "code": "U+1F3C4",
        "emoji": "🏄",
        "number": 356,
        "name": "person surfing",
        "category": "people",
        "subCategory": "person-sport",
        "tags": ["surfing", "surf", "surfer", "wave", "ocean", "beach", "sport", "🏄 emoji", "surfing emoji", "board", "surfboard", "water sport", "surfing wave", "surfing beach", "surfer emoji"],
        "description": "A person surfing on a surfboard."
    },
    "🏄‍♂️": {
        "code": "U+1F3C4 U+200D U+2642 U+FE0F",
        "emoji": "🏄‍♂️",
        "number": 357,
        "name": "man surfing",
        "category": "people",
        "subCategory": "person-sport",
        "tags": ["man", "surfing", "surf", "surfer", "wave", "ocean", "beach", "sport", "male", "🏄‍♂️ emoji", "surfing emoji", "board", "surfboard", "water sport", "surfing wave", "surfing beach", "surfer emoji"],
        "description": "A man surfing on a surfboard."
    },
    "🏄‍♀️": {
        "code": "U+1F3C4 U+200D U+2640 U+FE0F",
        "emoji": "🏄‍♀️",
        "number": 358,
        "name": "woman surfing",
        "category": "people",
        "subCategory": "person-sport",
        "tags": ["woman", "surfing", "surf", "surfer", "wave", "ocean", "beach", "sport", "female", "🏄‍♀️ emoji", "surfing emoji", "board", "surfboard", "water sport", "surfing wave", "surfing beach", "surfer emoji"],
        "description": "A woman surfing on a surfboard."
    },
    "🚣": {
        "code": "U+1F6A3",
        "emoji": "🚣",
        "number": 359,
        "name": "person rowing boat",
        "category": "people",
        "subCategory": "person-sport",
        "tags": ["rowing", "row", "boat", "rowboat", "water", "sport", "🚣 emoji", "rowing boat emoji", "oar", "paddle", "lake", "river", "water sport", "rowing sport"],
        "description": "A person rowing a boat."
    },
    "🚣‍♂️": {
        "code": "U+1F6A3 U+200D U+2642 U+FE0F",
        "emoji": "🚣‍♂️",
        "number": 360,
        "name": "man rowing boat",
        "category": "people",
        "subCategory": "person-sport",
        "tags": ["man", "rowing", "row", "boat", "rowboat", "water", "sport", "male", "🚣‍♂️ emoji", "rowing boat emoji", "oar", "paddle", "lake", "river", "water sport", "rowing sport"],
        "description": "A man rowing a boat."
    },
    "🚣‍♀️": {
        "code": "U+1F6A3 U+200D U+2640 U+FE0F",
        "emoji": "🚣‍♀️",
        "number": 361,
        "name": "woman rowing boat",
        "category": "people",
        "subCategory": "person-sport",
        "tags": ["woman", "rowing", "row", "boat", "rowboat", "water", "sport", "female", "🚣‍♀️ emoji", "rowing boat emoji", "oar", "paddle", "lake", "river", "water sport", "rowing sport"],
        "description": "A woman rowing a boat."
    },
    "🏊": {
        "code": "U+1F3CA",
        "emoji": "🏊",
        "number": 362,
        "name": "person swimming",
        "category": "people",
        "subCategory": "person-sport",
        "tags": ["swimming", "swim", "swimmer", "water", "pool", "ocean", "sport", "🏊 emoji", "swimming emoji", "swimsuit", "goggles", "water sport", "swimming pool", "swimming competition", "swimming race"],
        "description": "A person swimming."
    },
    "🏊‍♂️": {
        "code": "U+1F3CA U+200D U+2642 U+FE0F",
        "emoji": "🏊‍♂️",
        "number": 363,
        "name": "man swimming",
        "category": "people",
        "subCategory": "person-sport",
        "tags": ["man", "swimming", "swim", "swimmer", "water", "pool", "ocean", "sport", "male", "🏊‍♂️ emoji", "swimming emoji", "swimsuit", "goggles", "water sport", "swimming pool", "swimming competition", "swimming race"],
        "description": "A man swimming."
    },
    "🏊‍♀️": {
        "code": "U+1F3CA U+200D U+2640 U+FE0F",
        "emoji": "🏊‍♀️",
        "number": 364,
        "name": "woman swimming",
        "category": "people",
        "subCategory": "person-sport",
        "tags": ["woman", "swimming", "swim", "swimmer", "water", "pool", "ocean", "sport", "female", "🏊‍♀️ emoji", "swimming emoji", "swimsuit", "goggles", "water sport", "swimming pool", "swimming competition", "swimming race"],
        "description": "A woman swimming."
    },
    "⛹": {
        "code": "U+26F9",
        "emoji": "⛹",
        "number": 365,
        "name": "person bouncing ball",
        "category": "people",
        "subCategory": "person-sport",
        "tags": ["bouncing ball", "basketball", "sport", "⛹️ emoji", "basketball player", "ball", "dribble", "court", "game", "sports"],
        "description": "A person bouncing a ball."
    },
    "⛹️‍♂️": {
        "code": "U+26F9 U+FE0F U+200D U+2642 U+FE0F",
        "emoji": "⛹️‍♂️",
        "number": 366,
        "name": "man bouncing ball",
        "category": "people",
        "subCategory": "person-sport",
        "tags": ["man", "bouncing ball", "basketball", "sport", "male", "⛹️‍♂️ emoji", "basketball player", "ball", "dribble", "court", "game", "sports"],
        "description": "A man bouncing a ball."
    },
    "⛹️‍♀️": {
        "code": "U+26F9 U+FE0F U+200D U+2640 U+FE0F",
        "emoji": "⛹️‍♀️",
        "number": 367,
        "name": "woman bouncing ball",
        "category": "people",
        "subCategory": "person-sport",
        "tags": ["woman", "bouncing ball", "basketball", "sport", "female", "⛹️‍♀️ emoji", "basketball player", "ball", "dribble", "court", "game", "sports"],
        "description": "A woman bouncing a ball."
    },
    "🏋": {
        "code": "U+1F3CB",
        "emoji": "🏋",
        "number": 368,
        "name": "person lifting weights",
        "category": "people",
        "subCategory": "person-sport",
        "tags": ["weightlifting", "weightlifter", "weights", "lifting", "gym", "exercise", "fitness", "strength", "training", "🏋️ emoji", "weightlifting emoji", "weightlifting sport", "strong", "muscle", "workout", "gym emoji"],
        "description": "A person lifting weights."
    },
    "🏋️‍♂️": {
        "code": "U+1F3CB U+FE0F U+200D U+2642 U+FE0F",
        "emoji": "🏋️‍♂️",
        "number": 369,
        "name": "man lifting weights",
        "category": "people",
        "subCategory": "person-sport",
        "tags": ["man", "weightlifting", "weightlifter", "weights", "lifting", "gym", "exercise", "fitness", "strength", "training", "male", "🏋️‍♂️ emoji", "weightlifting emoji", "weightlifting sport", "strong", "muscle", "workout", "gym emoji"],
        "description": "A man lifting weights."
    },
    "🏋️‍♀️": {
        "code": "U+1F3CB U+FE0F U+200D U+2640 U+FE0F",
        "emoji": "🏋️‍♀️",
        "number": 370,
        "name": "woman lifting weights",
        "category": "people",
        "subCategory": "person-sport",
        "tags": ["woman", "weightlifting", "weightlifter", "weights", "lifting", "gym", "exercise", "fitness", "strength", "training", "female", "🏋️‍♀️ emoji", "weightlifting emoji", "weightlifting sport", "strong", "muscle", "workout", "gym emoji"],
        "description": "A woman lifting weights."
    },
    "🚴": {
        "code": "U+1F6B4",
        "emoji": "🚴",
        "number": 371,
        "name": "person biking",
        "category": "people",
        "subCategory": "person-sport",
        "tags": ["biking", "bike", "bicycle", "cyclist", "sport", "exercise", "fitness", "transportation", "🚴 emoji", "biking emoji", "cycling", "road bike", "mountain bike", "bike riding", "bicycle riding", "cyclist emoji"],
        "description": "A person riding a bicycle."
    },
    "🚴‍♂️": {
        "code": "U+1F6B4 U+200D U+2642 U+FE0F",
        "emoji": "🚴‍♂️",
        "number": 372,
        "name": "man biking",
        "category": "people",
        "subCategory": "person-sport",
        "tags": ["man", "biking", "bike", "bicycle", "cyclist", "sport", "exercise", "fitness", "transportation", "male", "🚴‍♂️ emoji", "biking emoji", "cycling", "road bike", "mountain bike", "bike riding", "bicycle riding", "cyclist emoji"],
        "description": "A man riding a bicycle."
    },
    "🚴‍♀️": {
        "code": "U+1F6B4 U+200D U+2640 U+FE0F",
        "emoji": "🚴‍♀️",
        "number": 373,
        "name": "woman biking",
        "category": "people",
        "subCategory": "person-sport",
        "tags": ["woman", "biking", "bike", "bicycle", "cyclist", "sport", "exercise", "fitness", "transportation", "female", "🚴‍♀️ emoji", "biking emoji", "cycling", "road bike", "mountain bike", "bike riding", "bicycle riding", "cyclist emoji"],
        "description": "A woman riding a bicycle."
    },
    "🚵": {
        "code": "U+1F6B5",
        "emoji": "🚵",
        "number": 374,
        "name": "person mountain biking",
        "category": "people",
        "subCategory": "person-sport",
        "tags": ["mountain biking", "mountain bike", "biking", "bike", "cyclist", "sport", "exercise", "fitness", "outdoor", "adventure", "🚵 emoji", "mountain biking emoji", "cycling", "mountain biker", "off road", "trail", "downhill", "mountain biking sport"],
        "description": "A person riding a mountain bike."
    },
    "🚵‍♂️": {
        "code": "U+1F6B5 U+200D U+2642 U+FE0F",
        "emoji": "🚵‍♂️",
        "number": 375,
        "name": "man mountain biking",
        "category": "people",
        "subCategory": "person-sport",
        "tags": ["man", "mountain biking", "mountain bike", "biking", "bike", "cyclist", "sport", "exercise", "fitness", "outdoor", "adventure", "male", "🚵‍♂️ emoji", "mountain biking emoji", "cycling", "mountain biker", "off road", "trail", "downhill", "mountain biking sport"],
        "description": "A man riding a mountain bike."
    },
    "🚵‍♀️": {
        "code": "U+1F6B5 U+200D U+2640 U+FE0F",
        "emoji": "🚵‍♀️",
        "number": 376,
        "name": "woman mountain biking",
        "category": "people",
        "subCategory": "person-sport",
        "tags": ["woman", "mountain biking", "mountain bike", "biking", "bike", "cyclist", "sport", "exercise", "fitness", "outdoor", "adventure", "female", "🚵‍♀️ emoji", "mountain biking emoji", "cycling", "mountain biker", "off road", "trail", "downhill", "mountain biking sport"],
        "description": "A woman riding a mountain bike."
    },
    "🤸": {
        "code": "U+1F938",
        "emoji": "🤸",
        "number": 377,
        "name": "person cartwheeling",
        "category": "people",
        "subCategory": "person-sport",
        "tags": ["cartwheeling", "gymnastics", "sport", "acrobatics", "🤸 emoji", "cartwheel", "gymnast", "tumbling", "flexibility", "athletic", "exercise", "gymnastics sport"],
        "description": "A person doing a cartwheel."
    },
    "🤸‍♂️": {
        "code": "U+1F938 U+200D U+2642 U+FE0F",
        "emoji": "🤸‍♂️",
        "number": 378,
        "name": "man cartwheeling",
        "category": "people",
        "subCategory": "person-sport",
        "tags": ["man", "cartwheeling", "gymnastics", "sport", "acrobatics", "male", "🤸‍♂️ emoji", "cartwheel", "gymnast", "tumbling", "flexibility", "athletic", "exercise", "gymnastics sport"],
        "description": "A man doing a cartwheel."
    },
    "🤸‍♀️": {
        "code": "U+1F938 U+200D U+2640 U+FE0F",
        "emoji": "🤸‍♀️",
        "number": 379,
        "name": "woman cartwheeling",
        "category": "people",
        "subCategory": "person-sport",
        "tags": ["woman", "cartwheeling", "gymnastics", "sport", "acrobatics", "female", "🤸‍♀️ emoji", "cartwheel", "gymnast", "tumbling", "flexibility", "athletic", "exercise", "gymnastics sport"],
        "description": "A woman doing a cartwheel."
    },
    "🤼": {
        "code": "U+1F93C",
        "emoji": "🤼",
        "number": 380,
        "name": "people wrestling",
        "category": "people",
        "subCategory": "person-sport",
        "tags": ["wrestling", "wrestler", "sport", "🤼 emoji", "grappling", "fight", "combat", "competition", "olympic", "sports"],
        "description": "Two people wrestling."
    },
    "🤼‍♂️": {
        "code": "U+1F93C U+200D U+2642 U+FE0F",
        "emoji": "🤼‍♂️",
        "number": 381,
        "name": "men wrestling",
        "category": "people",
        "subCategory": "person-sport",
        "tags": ["men", "wrestling", "wrestler", "sport", "male", "🤼‍♂️ emoji", "grappling", "fight", "combat", "competition", "olympic", "sports"],
        "description": "Two men wrestling."
    },
    "🤼‍♀️": {
        "code": "U+1F93C U+200D U+2640 U+FE0F",
        "emoji": "🤼‍♀️",
        "number": 382,
        "name": "women wrestling",
        "category": "people",
        "subCategory": "person-sport",
        "tags": ["women", "wrestling", "wrestler", "sport", "female", "🤼‍♀️ emoji", "grappling", "fight", "combat", "competition", "olympic", "sports"],
        "description": "Two women wrestling."
    },
    "🤽": {
        "code": "U+1F93D",
        "emoji": "🤽",
        "number": 383,
        "name": "person playing water polo",
        "category": "people",
        "subCategory": "person-sport",
        "tags": ["water polo", "polo", "water", "sport", "🤽 emoji", "ball", "pool", "team", "competition", "sports"],
        "description": "A person playing water polo."
    },
    "🤽‍♂️": {
        "code": "U+1F93D U+200D U+2642 U+FE0F",
        "emoji": "🤽‍♂️",
        "number": 384,
        "name": "man playing water polo",
        "category": "people",
        "subCategory": "person-sport",
        "tags": ["man", "water polo", "polo", "water", "sport", "male", "🤽‍♂️ emoji", "ball", "pool", "team", "competition", "sports"],
        "description": "A man playing water polo."
    },
    "🤽‍♀️": {
        "code": "U+1F93D U+200D U+2640 U+FE0F",
        "emoji": "🤽‍♀️",
        "number": 385,
        "name": "woman playing water polo",
        "category": "people",
        "subCategory": "person-sport",
        "tags": ["woman", "water polo", "polo", "water", "sport", "female", "🤽‍♀️ emoji", "ball", "pool", "team", "competition", "sports"],
        "description": "A woman playing water polo."
    },
    "🤾": {
        "code": "U+1F93E",
        "emoji": "🤾",
        "number": 386,
        "name": "person playing handball",
        "category": "people",
        "subCategory": "person-sport",
        "tags": ["handball", "ball", "sport", "🤾 emoji", "team", "competition", "sports"],
        "description": "A person playing handball."
    },
    "🤾‍♂️": {
        "code": "U+1F93E U+200D U+2642 U+FE0F",
        "emoji": "🤾‍♂️",
        "number": 387,
        "name": "man playing handball",
        "category": "people",
        "subCategory": "person-sport",
        "tags": ["man", "handball", "ball", "sport", "male", "🤾‍♂️ emoji", "team", "competition", "sports"],
        "description": "A man playing handball."
    },
    "🤾‍♀️": {
        "code": "U+1F93E U+200D U+2640 U+FE0F",
        "emoji": "🤾‍♀️",
        "number": 388,
        "name": "woman playing handball",
        "category": "people",
        "subCategory": "person-sport",
        "tags": ["woman", "handball", "ball", "sport", "female", "🤾‍♀️ emoji", "team", "competition", "sports"],
        "description": "A woman playing handball."
    },
    "🤹": {
        "code": "U+1F939",
        "emoji": "🤹",
        "number": 389,
        "name": "person juggling",
        "category": "people",
        "subCategory": "person-sport",
        "tags": ["juggling", "juggler", "circus", "performance", "skill", "balls", "clubs", "entertainment", "🤹 emoji", "juggling balls", "juggling clubs", "juggling act", "juggling performance", "juggling skills", "juggler emoji"],
        "description": "A person juggling."
    },
    "🤹‍♂️": {
        "code": "U+1F939 U+200D U+2642 U+FE0F",
        "emoji": "🤹‍♂️",
        "number": 390,
        "name": "man juggling",
        "category": "people",
        "subCategory": "person-sport",
        "tags": ["man", "juggling", "juggler", "circus", "performance", "skill", "balls", "clubs", "entertainment", "male", "🤹‍♂️ emoji", "juggling balls", "juggling clubs", "juggling act", "juggling performance", "juggling skills", "juggler emoji"],
        "description": "A man juggling."
    },
    "🤹‍♀️": {
        "code": "U+1F939 U+200D U+2640 U+FE0F",
        "emoji": "🤹‍♀️",
        "number": 391,
        "name": "woman juggling",
        "category": "people",
        "subCategory": "person-sport",
        "tags": ["woman", "juggling", "juggler", "circus", "performance", "skill", "balls", "clubs", "entertainment", "female", "🤹‍♀️ emoji", "juggling balls", "juggling clubs", "juggling act", "juggling performance", "juggling skills", "juggler emoji"],
        "description": "A woman juggling."
    }
}
