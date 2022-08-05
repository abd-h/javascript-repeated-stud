/*
    Map the Debris

    According to Kepler's Third Law, the orbital period T of two point masses orbiting each other in a in a circular or elliptic orbit is 

    T = 2 * Math.PI * Math.sqr(Math.pow(a, 3)/u);

    . a is the orbit's semi-major axis
    . u = GM is the gravitational parameter
    . G is the gravitational constant,
    . M is the mass of the more massive body.

    Retain the new array that transforms the elements avarage altitude in their orbital periods.

    The array will contain objects in the format {name: "name", avgAlt}.

    The values should be rounded to the nearest whole number. The body being orbited is Earth.

    The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.
*/

    function orbitalPeriod(arr) {
        const GM = 398600.4418;
        const earthRadius = 6367.4447;
        return arr.filter(obj => {
            
            let t = Math.round(2 * Math.PI * Math.sqrt(Math.pow((earthRadius + obj.avgAlt), 3)/GM));
            delete obj.avgAlt;
            return obj.orbitalPeriod = t;
        });
    }

    console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}])); // should return [{name: "sputnik", orbitalPeriod: 86400}].