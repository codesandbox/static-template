(function ($, window) {
    class Input {
        constructor() {
            this.inputNumber.call();
        }
        inputNumber () {
            let selector = $('.s-input input[type=number]'),
                min = selector.prop('min'),
                max = selector.prop('max');

            if (selector) {
                selector.siblings(".upkey").click(function () {
                    let currentValue = parseInt($(this).siblings("input").val(), 10);
                    if (max) {
                        if (currentValue < max) {
                            $(this).siblings("input").val(currentValue + 1);
                            $(this).siblings("input").change();
                        }
                    }else{
                        $(this).siblings("input").val(currentValue + 1);
                        $(this).siblings("input").change();
                    }
                });
                selector.siblings(".downkey").click(function () {
                    let currentValue = parseInt($(this).siblings("input").val(), 10);
                    if (min) {
                        if (currentValue > min) {
                            $(this).siblings("input").val(currentValue - 1);
                            $(this).siblings("input").change();
                        }
                    }else{
                        console.log('w');
                        $(this).siblings("input").val(currentValue - 1);
                        $(this).siblings("input").change();
                    }
                }); 
            }
        }
        onChange (name, handler) {
            let selector = $(`.s-input input[name=${name}]`);
            if(selector) {
                selector.on('change', function() {
                    return handler.call(this);
                });
            }
        }
    }
    window.Input = new Input();
})(jQuery, window);