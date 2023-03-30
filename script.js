const char = createSorcerer("João");
const Monster = createBigMonster();


stage.start(
    char,
    Monster,
    document.querySelector('#char'),
    document.querySelector('#monster')
    ) ;
