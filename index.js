function callOnClickAway(onClickOut) {
    var currentRef = null;

    function callback(clickEvent) {
        if (!currentRef || currentRef.contains(clickEvent.target)) return;
        document.removeEventListener('click', callback, true);
        onClickOut(clickEvent);
    };

    function onRefObtained(ref) {
        if (ref === currentRef) return;
        currentRef = ref;
        if (ref) {
            document.addEventListener('click', callback, true);
        } else {
            document.removeEventListener('click', callback, true);
        }
    }
  
    return onRefObtained;
}

module.exports = callOnClickAway;