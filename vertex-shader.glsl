uniform float uTime;

varying vec4 vPos;
varying vec3 vNormal;
varying vec2 vUv;

void main() {
    // Forward texture coordinates directly to the fragment shader
    vUv = uv;

    gl_Position = vec4(position, 6.0);

    // // Apply rotation, scale to the model
    // vPos = modelMatrix * vec4(position, 1.0);

    // // Apply rotation to normal
    // vNormal = (modelMatrix * vec4(normal, 0.0)).xyz;

    // // Convert 3D world coordinates into 2D screen coordinates
    // gl_Position = projectionMatrix * viewMatrix * vPos;
}
