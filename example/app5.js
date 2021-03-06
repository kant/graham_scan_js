(function() {
    var canvas = document.getElementById('hullCanvas'),
        ctx = canvas.getContext('2d'),
        convexHull = new ConvexHullGrahamScan(),
        points = [
            [2,2], [2,-2], [-2,-2], [-2,2],
            [3,3], [3,-3], [-3,-3], [-3,3],
            [4,4], [4,-4], [-4,-4], [-4,4],
            [5,5], [5,-5], [-5,-5], [-5,5]
        ],
        hull,
        drawPoint = function(point, fill) {
            ctx.beginPath();
            ctx.arc((point.x*20)+200, (point.y*20)+200, 3, 0, 3* Math.PI);
            if (fill){
                ctx.fillStyle = fill;
                ctx.fill();
            } else {
                ctx.stroke();
            }
        };

    points.forEach(function(p) {
        convexHull.addPoint(p[0], p[1]);
        drawPoint({x:p[0], y:p[1]});
    });

    hull = convexHull.getHull();
    console.log(hull);

    ctx.beginPath();
    ctx.moveTo((hull[0].x*20)+200, (hull[0].y*20)+200);
    hull.forEach(function(p) {
        ctx.lineTo((p.x*20)+200, (p.y*20)+200);
    });
    ctx.lineTo((hull[0].x*20)+200, (hull[0].y*20)+200);
    ctx.stroke();
    ctx.closePath();

    hull.forEach(function(p) {
        drawPoint(p, 'green');
    });


})();