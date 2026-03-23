import React from 'react';
import { Link } from 'react-router-dom';

const politicaTexto = `Política de privacidad
En ALFERAT CRUZ CORTES S.L. nos preocupamos por la privacidad y la transparencia.
A continuación, le indicamos en detalle los tratamientos de datos personales que realizamos, así como toda la información relativa a los mismos. Tratamiento de los datos de candidatos a un puesto de trabajo Información básica sobre Protección de datos Responsable: ALFERAT CRUZ CORTES S.L.Finalidad: Realizar los procesos de selección de personal Legitimación: Consentimiento del interesado. Destinatarios: No se cederán datos a terceros, salvo obligación legal. Derechos: Tiene derecho a acceder, rectificar y suprimir los datos, así como otros derechos, indicados en la información adicional, que puede ejercer dirigiéndose a INFO@ELLADOCREATIVO.COM o C/ Pergamino, 8, 41016 Sevilla. Procedencia: El propio interesado. Información completa sobre Protección de Datos

1. ¿Quién es el responsable del tratamiento de sus datos?
ALFERAT CRUZ CORTES S.L..B91280370.C/ VÍA TIBURTINA, 15 – 41016 – SEVILLA.662325871.

INFO@ELLADOCREATIVO.COM.

2. ¿Con qué finalidad tratamos sus datos personales?En ALFERAT CRUZ CORTES S.L. tratamos la información que nos facilitan las personas interesadas con el fin de Gestionar los Curriculum Vitae recibidos y realizar los procesos de selección de personal. En el caso de que no facilite sus datos personales, no podremos cumplir con las funcionalidades descritas anteriormente.No se van a tomar decisiones automatizadas en base a los datos proporcionados.

3. ¿Por cuánto tiempo conservaremos sus datos?

Dos años desde la última interacción

4. ¿Cuál es la legitimación para el tratamiento de sus datos? Le indicamos la base legal para el tratamiento de sus datos:

• Consentimiento del interesado: Gestionar los Curriculum Vitae recibidos y realizar los procesos de selección de personal.

5. ¿A qué destinatarios se comunicarán sus datos?

No se cederán datos a terceros, salvo obligación legal.

6. Transferencias de datos a terceros países

No están previstas transferencias de datos a terceros países.

7. ¿Cuáles son sus derechos cuando nos facilita sus datos? Cualquier persona tiene derecho a obtener confirmación sobre si en ALFERAT CRUZ CORTES S.L. estamos tratando, o no, datos personales que les conciernan.
Las personas interesadas tienen derecho a acceder a sus datos personales, así como a solicitar la rectificación de los datos inexactos o, en su caso, solicitar su supresión cuando, entre otros motivos, los datos ya no sean necesarios para los fines que fueron recogidos. Igualmente tiene derecho a la portabilidad de sus datos. En determinadas circunstancias, los interesados podrán solicitar la limitación del tratamiento de sus datos, en cuyo caso únicamente los conservaremos para el ejercicio o la defensa de reclamaciones. En determinadas circunstancias y por motivos relacionados con su situación particular, los interesados podrán oponerse al tratamiento de sus datos. En este caso, ALFERAT CRUZ CORTES S.L. dejará de tratar los datos, salvo por motivos legítimos imperiosos, o el ejercicio o la defensa de posibles reclamaciones. Podrá ejercitar materialmente sus derechos de la siguiente forma: dirigiéndose a INFO@ELLADOCREATIVO.COM o C/ Pergamino, 8, 41016 Sevilla. Cuando se realice el envío de comunicaciones comerciales utilizando como base jurídica el interés legítimo del responsable, el interesado podrá oponerse al tratamiento de sus datos con ese fin. Si ha otorgado su consentimiento para alguna finalidad concreta, tiene derecho a retirar el consentimiento otorgado en cualquier momento, sin que ello afecte a la licitud del tratamiento basado en el consentimiento previo a su retirada.

En caso de que sienta vulnerados sus derechos en lo concerniente a la protección de sus datos personales, especialmente cuando no haya obtenido satisfacción en el ejercicio de sus derechos, puede presentar una reclamación ante la Autoridad de Control en materia de Protección de Datos competente a través de su sitio web: www.aepd.es.

8. ¿Cómo hemos obtenido sus datos? Los datos personales que tratamos en ALFERAT CRUZ CORTES S.L. proceden de: El propio interesado.  Tratamiento de los datos de clientes Información básica sobre Protección de datos Responsable: ALFERAT CRUZ CORTES S.L. Finalidad: Prestar los servicios solicitados y enviar comunicaciones comerciales vía electrónica Legitimación: Ejecución de un contrato. Interés legítimo del Responsable. Destinatarios: Están previstas cesiones de datos a: Administración Tributaria; Entidades financieras. Derechos: Tiene derecho a acceder, rectificar y suprimir los datos, así como otros derechos, indicados en la información adicional, que puede ejercer dirigiéndose a INFO@ELLADOCREATIVO.COM o C/ Pergamino, 8, 41016 Sevilla. Procedencia: El propio interesado.`;

const Politica = () => {
	return (
		<div className="min-h-screen bg-[#fbfbfd] text-[#1d1d1f] font-sans">
			<nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/70 border-b border-gray-200/50">
				<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
					<Link to="/" className="text-sm font-medium text-gray-600 hover:text-[#2563eb] transition-colors">
						Inicio
					</Link>
					<span className="font-bold text-xs tracking-widest uppercase text-gray-400">Privacidad</span>
				</div>
			</nav>

			<main className="px-6 pt-28 pb-16 md:pt-32 md:pb-20">
				<div className="max-w-5xl mx-auto">
					<header className="mb-8 md:mb-10">
						<h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">Política de privacidad</h1>
						<p className="text-gray-500 text-base md:text-lg">Información sobre el tratamiento y protección de datos personales.</p>
					</header>

					<section className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-10">
						<pre className="whitespace-pre-wrap text-sm md:text-[15px] leading-7 text-gray-700 font-sans">
							{politicaTexto}
						</pre>
					</section>
				</div>
			</main>
		</div>
	);
};

export default Politica;
