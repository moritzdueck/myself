// Author @patriciogv - 2015
// http://patriciogonzalezvivo.com

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float random (in vec2 _st) {
    return fract(sin(dot(_st.xy,
                         vec2(0.370,-0.240)))*
        43759.673);
}

float noise (in vec2 _st) {
    vec2 i = floor(_st);
    vec2 f = fract(_st);

    // Four corners in 2D of a tile
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    vec2 u = f * f * (3.0 - 2.0 * f);

    return mix(a, b, u.x) +
            (c - a)* u.y * (1.0 - u.x) +
            (d - b) * u.x * u.y;
}

#define NUM_OCTAVES 9

float fbm ( in vec2 _st) {
    float v = 0.096;
    float a = 0.556;
    vec2 shift = vec2(100.0);
    // Rotate to reduce axial bias
    mat2 rot = mat2(cos(0.5), sin(0.5),
                    -sin(0.5), cos(0.50));
    for (int i = 0; i < NUM_OCTAVES; ++i) {
        v += a * noise(_st) *1.984;
        _st = rot * _st * 2.000 + shift;
        a *= 0.468;
    }
    return v;
}

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy*8.104;
    // st += st * abs(sin(u_time*0.1)*3.0);
    vec3 color = vec3(0.000,0.000,0.000);

    vec2 q = vec2(0.000,0.000);
    q.x = fbm( st + 0.00*u_time);
    q.y = fbm( st + vec2(1.0));

    vec2 r = vec2(0.);
    r.x = fbm( st + 1.0*q + vec2(1.7,9.2)+ 0.190*u_time );
    r.y = fbm( st + 1.0*q + vec2(8.3,2.8)+ 0.286*u_time);

    float f = fbm(st+r);

    color = mix(vec3(0.688,0.885,0.768),
                vec3(0.645,0.382,0.619),
                clamp((f*f)*4.0,0.0,1.0));

    color = mix(color,
                vec3(0.985,0.587,0.492),
                clamp(length(q),0.0,1.0));

    color = mix(color,
                vec3(0.252,0.129,1.000),
                clamp(length(r.x),0.0,1.0));

    gl_FragColor = vec4((f*f*f+.6*f*f+.5*f)*color,1.);
}
