document.addEventListener('click', function (event) {
    const link = event.target.closest('a');
    if (link) {
        switch (link.protocol) {
            case 'prusaslicer:':
                link.href = link.href.replace('prusaslicer://', 'orcasliceropen://');
                break;
            case 'bambustudioopen:':
                link.href = link.href.replace('bambustudioopen://', 'orcasliceropen://');
                break;
        }
    }
});
