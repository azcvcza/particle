/*-- global object --*/

var pJS = function (tag_id, params) {
    var canvas_el = documen.querySelector('#' + tag_id + '> .particle-js-canvas-el');

    /*-- default setting --*/
    this.pJS = {
        canvas: {
            el: canvas_el,
            w: canvas_el.offsetWidth,
            h: canvas_el.offsetHeight
        }, //canvas end
        particles: {
            number: {
                value: 400,
                density: {
                    enable: true,
                    value_area: 800
                }
            }, //number end
            color: {
                value: '#fff'
            }, //color end
            shape: {
                type: 'circle',
                stroke: {
                    width: 0,
                    color: '#ff0000'
                },
                polygon: {
                    nb_sides: 5
                },
                image: {
                    src: '',
                    width: 100,
                    height: 100
                }
            }, //shape end
            opacity: {
                value: 1,
                random: false,
                anim: {
                    enable: false,
                    speed: 2,
                    opacity_min: 0,
                    sync: false
                }
            }, //opacity end
            size: {
                value: 20,
                random: false,
                anim: {
                    enable: false,
                    speed: 20,
                    size_min: 0,
                    sync: false
                }
            }, //size end
            line_linked: {
                enable: true,
                distance: 100,
                color: '#fff',
                opacity: 1,
                width: 1
            }, //line_linked end
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 3000,
                    rotateY: 3000
                }
            }, //move end
            array: []
        }, //particles end
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'grab'
                }, //onhover end
                onclick: {
                    enable: true,
                    mode: 'push'
                }, //on click end
                resize: true
            },//events end
            modes: {
                grab: {
                    distance: 100,
                    line_linked: {
                        opacity: 1
                    }
                }, //grab end
                bubble: {
                    distance: 200,
                    size: 80,
                    duration: 0.4
                }, //bubble end
                repulse: {
                    distance: 200,
                    duration: 0.4
                }, //repulse
                push: {
                    particles_nb: 4
                }, //push end
                remove: {
                    partices_nb: 2
                }
            },//mode end
            mouse:{}
        },//inter end
        retina_detect:false,
        fn:{
            interact:{},
            modes:{},
            vendors:{}
        },//fn ends
        tmp:{}
    };//this.pJS end

    var pJS = this.pJS;

    /* params settings */
    if(params){
        Object.deepExtend(pJS,params);
    }
    //set tmp : {}
    pJS.tmp.obj = {
        size_value:pJS.particles.size.value,
        size_anim_speed:pJS.particles.size.anim.speed,
        move_speed:pJS.particles.move.speed,
        line_linked_distance:pJS.particles.line_linked.distance,
        line_linked_width:pJS.particles.line_linked.width,
        mode_grab_distance:pJS.interactivity.modes.grab.distance,
        mode_bubble_distance:pJS.interactivity.modes.bubble.distance,
        mode_bubule_size:pJS.interactivity.modes.bubble.size,
        mode_repulse_distance:pJS.interactivity.modes.repulse.distance,
    };

    

}