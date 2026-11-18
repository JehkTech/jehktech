"use client";

import { useEffect, useRef } from "react";

const vertex = "attribute vec2 p; void main(){gl_Position=vec4(p,0.,1.);}";
const fragment = "precision mediump float; uniform vec2 r,m; uniform float t; float n(vec2 p){return sin(p.x)*sin(p.y);} void main(){vec2 u=gl_FragCoord.xy/r,q=u-.5;q.x*=r.x/r.y;vec2 x=m-.5;x.x*=r.x/r.y;float d=length(q-x);float k=smoothstep(.55+n(q*9.+t*.12)*.08,.06,d+sin(t*.8+q.x*8.)*.06);vec3 b=vec3(.025,.028,.04),a=mix(vec3(.12,.2,.95),vec3(.10,.92,.98),u.y+sin(t*.35+u.x*7.)*.17);gl_FragColor=vec4(mix(b,a,k),1.);}";

export default function InkCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const gl = canvas.getContext("webgl", { alpha: false, powerPreference: "low-power" });
    if (!gl) return;
    const compile = (type: number, source: string) => { const s = gl.createShader(type)!; gl.shaderSource(s, source); gl.compileShader(s); return s; };
    const program = gl.createProgram()!;
    gl.attachShader(program, compile(gl.VERTEX_SHADER, vertex)); gl.attachShader(program, compile(gl.FRAGMENT_SHADER, fragment)); gl.linkProgram(program); gl.useProgram(program);
    const buffer = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buffer); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]), gl.STATIC_DRAW);
    const pos = gl.getAttribLocation(program, "p"); gl.enableVertexAttribArray(pos); gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);
    const r = gl.getUniformLocation(program, "r"), m = gl.getUniformLocation(program, "m"), t = gl.getUniformLocation(program, "t");
    let point = { x: .5, y: .5 }, frame = 0, active = true;
    const resize = () => { const dpr = Math.min(devicePixelRatio, innerWidth < 700 ? 1.25 : 1.8); canvas.width = canvas.clientWidth * dpr; canvas.height = canvas.clientHeight * dpr; gl.viewport(0, 0, canvas.width, canvas.height); };
    const move = (event: PointerEvent) => { const box = canvas.getBoundingClientRect(); point = { x: (event.clientX - box.left) / box.width, y: 1 - (event.clientY - box.top) / box.height }; };
    const draw = (now: number) => { if (!active) return; gl.uniform2f(r, canvas.width, canvas.height); gl.uniform2f(m, point.x, point.y); gl.uniform1f(t, now / 1000); gl.drawArrays(gl.TRIANGLES, 0, 6); frame = requestAnimationFrame(draw); };
    const visible = () => { active = !document.hidden; if (active) frame = requestAnimationFrame(draw); };
    resize(); addEventListener("resize", resize); canvas.addEventListener("pointermove", move); document.addEventListener("visibilitychange", visible); frame = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(frame); removeEventListener("resize", resize); canvas.removeEventListener("pointermove", move); document.removeEventListener("visibilitychange", visible); };
  }, []);
  return <canvas ref={ref} className="inkCanvas" aria-hidden="true" />;
}
