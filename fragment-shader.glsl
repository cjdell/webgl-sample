uniform float uTime;

varying vec4 vPos;
varying vec3 vNormal;
varying vec2 vUv;

void main() {
    float r = 1.0;
    float g = 1.0;
    float b = 1.0;

    // float r = sin(uTime / 1000.0);
    // float g = cos(uTime / 1000.0);
    // float b = sin(uTime / 2000.0);

    // float r = vUv.x;
    // float g = vUv.y;
    // float b = 1.0;

    // float r = sin(vUv.x * 10.0 + uTime / 100.0);
    // float g = cos(vUv.x * 10.0 + uTime / 100.0);
    // float b = sin(vUv.x * 10.0 + uTime / 200.0);

    vec4 col = vec4(r, g, b, 0.0);

    // Fake lighting
    // vec3 lightPosition = vec3(0.0, 12.0, 0.0);
    // vec3 lightDirection = normalize(vPos.xyz - lightPosition);
    // float light = clamp(dot(-lightDirection, vNormal), 0.0, 1.0);
    // col.rgb = col.rgb * light;

    gl_FragColor = col;
}
