import AOS from "aos";

export function myAosInit(){
    AOS.init({
        duration: 1000,
        once: false,
        mirror: true
    });
}
