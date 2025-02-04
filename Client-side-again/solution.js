var _0x5a46 = [
    '0a029}', '_again_5', 'this', 'Password\x20Verified', 'Incorrect\x20password', 
    'getElementById', 'value', 'substring', 'picoCTF{', 'not_this'
];

(function (_0x4bd822, _2bd6f7) {
    var _0xb4bdb3 = function (_0x1d68f6) {
        while (--_0x1d68f6) {
            _0x4bd822.push(_0x4bd822.shift());
        }
    };
    _0xb4bdb3(++_2bd6f7);
}(_0x5a46, 0x1b3));

var fnc = function (_2d8f05, _0x4b81bb) {
    _2d8f05 = _2d8f05 - 0;
    var _0x4d74cb = _0x5a46[_2d8f05];
    return _0x4d74cb;
};

//picoCTF{not_this_again_50a029}
function verify() {
    checkpass = document[fnc('0')]('pass')[fnc('0x1')];
    split = 4;
    if (checkpass[fnc('2')](0, split * 2) == 'picoCTF{') {
        if (checkpass[fnc('2')](7, 9) == '{n') {
            if (checkpass[fnc('2')](8, 16) == 'not_this') {
                if (checkpass[fnc('2')](3, 6) == 'oCT') {
                    if (checkpass[fnc('2')](split * 3 * 2, split * 4 * 2) == '0a029}') {
                        if (checkpass['substring'](6, 11) == 'F{not') {
                            if (checkpass[fnc('2')](split * 2 * 2, split * 3 * 2) == '_again_5') {
                                if (checkpass[fnc('2')](12, 16) == 'this') {
                                    alert('Password Verified');
                                }
                            }
                        }
                    }
                }
            }
        }
    } else {
        alert(fnc('0x9'));
    }
}
