import React from 'react';
import {Composition, AbsoluteFill, Sequence, interpolate, useCurrentFrame} from 'remotion';

const panels = [
  ['¿TU CELULAR ESTÁ LENTO?', '3 comprobaciones antes de gastar dinero'],
  ['1. REINICIÁ', 'Cerrá procesos temporales y volvé a probar'],
  ['2. REVISÁ EL ESPACIO', 'Borrá archivos que ya no necesites'],
  ['3. ACTUALIZÁ LAS APPS', 'Usá las tiendas oficiales'],
  ['MEDÍ EL CAMBIO', 'Probá después de cada ajuste'],
  ['MENOS TRUCOS, MÁS SOLUCIONES', 'Tecnología práctica para todos'],
];

const Panel: React.FC<{index: number}> = ({index}) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 8, 110, 119], [0, 1, 1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const scale = interpolate(frame, [0, 119], [0.96, 1.04]);
  return <AbsoluteFill style={{backgroundColor: '#0c1322', color: '#f6f9fc', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Arial', padding: 64, boxSizing: 'border-box'}}>
    <div style={{textAlign: 'center', opacity, transform: `scale(${scale})`, width: '100%'}}>
      <div style={{fontSize: 30, color: '#72efc9', marginBottom: 80}}>VIDEO INCOME STUDIO</div>
      <div style={{fontSize: 70, fontWeight: 800, lineHeight: 1.12, marginBottom: 50}}>{panels[index][0]}</div>
      <div style={{fontSize: 38, lineHeight: 1.35, color: '#b7cfdb'}}>{panels[index][1]}</div>
      <div style={{fontSize: 28, color: '#72efc9', marginTop: 110}}>{String(index + 1).padStart(2, '0')} / 06</div>
    </div>
  </AbsoluteFill>;
};

const Video: React.FC = () => <AbsoluteFill>{panels.map((_, i) => <Sequence key={i} from={i * 120} durationInFrames={120}><Panel index={i} /></Sequence>)}</AbsoluteFill>;

export const Root: React.FC = () => <Composition id="Piloto01" component={Video} durationInFrames={720} fps={24} width={720} height={1280} />;
