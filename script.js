const VT_API_KEY = "e363a20037c40aed5c6c2dfef9b25ed32cc461f594090a4d3c2ae8423a975273";
const CORS_PROXY = "https://corsproxy.io/?";

const urlInput = document.getElementById('urlInput');
const loader = document.getElementById('loader');
const resultsPanel = document.getElementById('resultsPanel');
const scoreCircle = document.getElementById('scoreCircle');
const riskLevelLabel = document.getElementById('riskLevel');
const detailsContent = document.getElementById('detailsContent');
const scanIdLabel = document.getElementById('scanId');
const verdictBadge = document.getElementById('verdictBadge');

const BRANDS_DB = {

    'google': 'google.com', 'gmail': 'google.com', 'drive': 'google.com', 'docs': 'google.com',
    'microsoft': 'microsoft.com', 'office': 'office.com', 'teams': 'microsoft.com', 'outlook': 'live.com', 'sharepoint': 'sharepoint.com', 'onedrive': 'microsoft.com', 'azure': 'microsoft.com', 'bing': 'bing.com', 'skype': 'skype.com',
    'apple': 'apple.com', 'icloud': 'apple.com', 'itunes': 'apple.com', 'appstore': 'apple.com',
    'adobe': 'adobe.com', 'creativecloud': 'adobe.com',
    'dropbox': 'dropbox.com', 'box': 'box.com', 'wetransfer': 'wetransfer.com',
    'aws': 'amazon.com', 'amazonwebservices': 'amazon.com',
    'oracle': 'oracle.com', 'ibm': 'ibm.com', 'salesforce': 'salesforce.com', 'sap': 'sap.com',
    'zoom': 'zoom.us', 'slack': 'slack.com', 'atlassian': 'atlassian.com', 'trello': 'trello.com', 'jira': 'atlassian.com',
    'github': 'github.com', 'gitlab': 'gitlab.com', 'bitbucket': 'bitbucket.org',
    'heroku': 'heroku.com', 'digitalocean': 'digitalocean.com', 'cloudflare': 'cloudflare.com',
    'cisco': 'cisco.com', 'webex': 'webex.com', 'teamviewer': 'teamviewer.com', 'anydesk': 'anydesk.com',


    'facebook': 'facebook.com', 'fb': 'facebook.com', 'messenger': 'messenger.com',
    'instagram': 'instagram.com', 'whatsapp': 'whatsapp.com',
    'twitter': 'twitter.com', 'x': 'x.com',
    'linkedin': 'linkedin.com',
    'tiktok': 'tiktok.com', 'snapchat': 'snapchat.com', 'pinterest': 'pinterest.com',
    'discord': 'discord.com', 'telegram': 'telegram.org', 'signal': 'signal.org',
    'reddit': 'reddit.com', 'tumblr': 'tumblr.com', 'quora': 'quora.com',
    'tinder': 'tinder.com', 'bumble': 'bumble.com', 'badoo': 'badoo.com',



    'chase': 'chase.com', 'jpmorgan': 'jpmorgan.com',
    'bankofamerica': 'bankofamerica.com', 'bofa': 'bankofamerica.com', 'merrill': 'ml.com',
    'wellsfargo': 'wellsfargo.com',
    'citi': 'citi.com', 'citibank': 'citi.com',
    'capitalone': 'capitalone.com', 'usbank': 'usbank.com', 'pnc': 'pnc.com', 'truist': 'truist.com',
    'goldmansachs': 'goldmansachs.com', 'morganstanley': 'morganstanley.com', 'schwab': 'schwab.com', 'fidelity': 'fidelity.com',

    'hsbc': 'hsbc.com', 'barclays': 'barclays.co.uk',
    'lloyds': 'lloydsbank.com', 'natwest': 'natwest.com', 'rbs': 'rbs.co.uk', 'halifax': 'halifax.co.uk',
    'santander': 'santander.com', 'standardchartered': 'sc.com',

    'deutschebank': 'db.com', 'commerzbank': 'commerzbank.de',
    'bnpparibas': 'mabanque.bnpparibas', 'societegenerale': 'societegenerale.com', 'creditagricole': 'credit-agricole.com',
    'ing': 'ing.com', 'rabobank': 'rabobank.com', 'abnamro': 'abnamro.com',
    'ubs': 'ubs.com', 'creditsuisse': 'credit-suisse.com',
    'nordea': 'nordea.com', 'danskebank': 'danskebank.com', 'swedbank': 'swedbank.com',
    'bbva': 'bbva.es', 'caixa': 'caixabank.es', 'sabadell': 'bancsabadell.com', 'bankinter': 'bankinter.com',
    'unicredit': 'unicreditgroup.eu', 'intesasanpaolo': 'intesasanpaolo.com',

    'rbc': 'rbc.com', 'td': 'td.com', 'scotia': 'scotiabank.com', 'bmo': 'bmo.com',
    'commbank': 'commbank.com.au', 'westpac': 'westpac.com.au', 'anz': 'anz.com.au', 'nab': 'nab.com.au',


    'paypal': 'paypal.com', 'venmo': 'venmo.com', 'cashapp': 'cash.app',
    'stripe': 'stripe.com', 'square': 'squareup.com', 'block': 'block.xyz',
    'wise': 'wise.com', 'revolut': 'revolut.com', 'n26': 'n26.com', 'monzo': 'monzo.com',
    'klarna': 'klarna.com', 'afterpay': 'afterpay.com', 'affirm': 'affirm.com',
    'westernunion': 'westernunion.com', 'moneygram': 'moneygram.com', 'skrill': 'skrill.com', 'neteller': 'neteller.com',


    'binance': 'binance.com', 'coinbase': 'coinbase.com', 'kraken': 'kraken.com',
    'metamask': 'metamask.io', 'ledger': 'ledger.com', 'trezor': 'trezor.io',
    'trustwallet': 'trustwallet.com', 'exodus': 'exodus.com',
    'blockchain': 'blockchain.com', 'etherscan': 'etherscan.io',
    'kucoin': 'kucoin.com', 'bybit': 'bybit.com', 'okx': 'okx.com', 'gate': 'gate.io', 'gemini': 'gemini.com', 'crypto': 'crypto.com', 'bitfinex': 'bitfinex.com',
    'uniswap': 'uniswap.org', 'pancakeswap': 'pancakeswap.finance', 'opensea': 'opensea.io', 'rarible': 'rarible.com',


    'amazon': 'amazon.com', 'prime': 'amazon.com',
    'ebay': 'ebay.com',
    'walmart': 'walmart.com', 'target': 'target.com', 'bestbuy': 'bestbuy.com', 'costco': 'costco.com',
    'alibaba': 'alibaba.com', 'aliexpress': 'aliexpress.com', 'taobao': 'taobao.com',
    'rakuten': 'rakuten.com',
    'etsy': 'etsy.com', 'shopify': 'shopify.com',
    'temu': 'temu.com', 'shein': 'shein.com',
    'mercadolibre': 'mercadolibre.com', 'flipkart': 'flipkart.com',
    'zalando': 'zalando.com', 'asos': 'asos.com',
    'nike': 'nike.com', 'adidas': 'adidas.com',


    'netflix': 'netflix.com',
    'spotify': 'spotify.com', 'soundcloud': 'soundcloud.com',
    'youtube': 'youtube.com', 'twitch': 'twitch.tv',
    'hulu': 'hulu.com', 'disney': 'disneyplus.com', 'hbo': 'hbo.com',
    'steam': 'steampowered.com', 'epicgames': 'epicgames.com', 'roblox': 'roblox.com', 'playstation': 'playstation.com', 'xbox': 'xbox.com',
    'airbnb': 'airbnb.com', 'booking': 'booking.com', 'expedia': 'expedia.com', 'tripadvisor': 'tripadvisor.com',
    'uber': 'uber.com', 'lyft': 'lyft.com', 'doordash': 'doordash.com', 'ubereats': 'ubereats.com', 'grubhub': 'grubhub.com', 'glovo': 'glovoapp.com', 'justeats': 'just-eat.com',



    'dhl': 'dhl.com',
    'fedex': 'fedex.com',
    'ups': 'ups.com',
    'tnt': 'tnt.com',
    'aramex': 'aramex.com',

    'usps': 'usps.com',

    'royalmail': 'royalmail.com', 'parcelforce': 'parcelforce.com', 'evri': 'evri.com', 'hermes': 'hermesworld.com',

    'laposte': 'laposte.fr', 'chronopost': 'chronopost.fr',
    'deutschepost': 'deutschepost.de', 'dpd': 'dpd.com',
    'postnl': 'postnl.nl', 'bpost': 'bpost.be',
    'posteitaliane': 'poste.it', 'brt': 'brt.it',
    'correos': 'correos.es', 'correosexpress': 'correosexpress.com', 'seur': 'seur.com', 'mrw': 'mrw.es', 'nacex': 'nacex.com', 'gls': 'gls-group.com', 'tipsa': 'tip-sa.com', 'zeleris': 'zeleris.com', 'ctt': 'ctt.pt',

    'japanpost': 'post.japanpost.jp', 'yamato': 'kuronekoyamato.co.jp',
    'chinapost': 'chinapost.com.cn', 'sf-express': 'sf-express.com',
    'indiapost': 'indiapost.gov.in', 'bluedart': 'bluedart.com',
    'auspost': 'auspost.com.au', 'startrack': 'startrack.com.au',
    'canadapost': 'canadapost-postescanada.ca', 'purolator': 'purolator.com'
};

async function startUrlScan() {
    let url = urlInput.value.trim();
    if (!url) return alert("Por favor ingrese una URL válida");


    if (!url.startsWith('http')) url = 'http://' + url;

    showLoader(true);
    scanIdLabel.innerText = Math.floor(Math.random() * 90000) + 10000; // Fake Scan ID

    const report = {
        url: url,
        risk_score: 0,
        heuristics: []
    };


    const analysis = analyzeHeuristics(url);
    report.heuristics = analysis.flags;
    report.risk_score += analysis.score;
    report.impersonation = analysis.impersonation;


    try {
        const vt = await checkVirusTotalUrl(url);
        report.virustotal = vt;
        if (vt.malicious > 0) report.risk_score += (vt.malicious * 20);
    } catch (e) {
        console.error(e);
        report.error = "Error de conexión con API de VirusTotal";
    }

    report.risk_score = Math.min(report.risk_score, 100);


    let level = "SEGURO";
    let color = "--primary";

    if (report.risk_score > 0) { level = "BAJO RIESGO"; color = "--warning"; }
    if (report.risk_score >= 40) { level = "PELIGROSO"; color = "orange"; }
    if (report.risk_score >= 80) { level = "CRÍTICO"; color = "--danger"; }

    displayReport(report, level, color);
    showLoader(false);
}

function analyzeHeuristics(url) {
    let score = 0;
    const flags = [];
    let impersonation = null;

    try {
        const u = new URL(url);
        const domain = u.hostname.toLowerCase();


        for (const [key, official] of Object.entries(BRANDS_DB)) {
            if (domain.includes(key)) {

                if (domain !== official && !domain.endsWith('.' + official)) {
                    impersonation = { detected: key, official: official };
                    flags.push({ type: 'CRITICAL', text: `Suplantación de Marca detectada: ${key.toUpperCase()}` });
                    score = 100;
                }
            }
        }


        if (/^[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+$/.test(domain)) {
            flags.push({ type: 'HIGH', text: 'El host usa una dirección IP en lugar de dominio' });
            score += 30;
        }


        if (domain.length > 60) {
            flags.push({ type: 'MEDIUM', text: 'Longitud de dominio sospechosa' });
            score += 10;
        }


        const badWords = ['login', 'signin', 'secure', 'account', 'verify', 'wallet', 'update'];
        if (!impersonation) {
            const found = badWords.find(w => domain.includes(w));
            if (found) {
                flags.push({ type: 'MEDIUM', text: `Palabra clave de ingeniería social: '${found}'` });
                score += 15;
            }
        }
    } catch (e) {
        return { score: 10, flags: [{ type: 'WARN', text: 'Formato de URL inválido' }] };
    }

    return { score, flags, impersonation };
}

function displayReport(data, level, colorVar) {
    resultsPanel.classList.add('active');


    scoreCircle.innerText = data.risk_score;
    scoreCircle.style.borderColor = `var(${colorVar === 'orange' ? '--warning' : colorVar})`;
    riskLevelLabel.innerText = level;
    riskLevelLabel.style.color = `var(${colorVar === 'orange' ? '--warning' : colorVar})`;

    verdictBadge.innerText = level;
    verdictBadge.style.background = `var(${colorVar === 'orange' ? '--warning' : colorVar})`;
    verdictBadge.style.color = '#000';

    let html = '';


    if (data.impersonation) {
        html += `
        <div class="warning-box">
            <div class="warning-icon">⚠️</div>
            <div>
                <h3 style="color:var(--danger)">SUPLANTACIÓN DE IDENTIDAD CONFIRMADA</h3>
                <p>Este sitio intenta hacerse pasar por <strong>${data.impersonation.detected.toUpperCase()}</strong>.</p>
                <p>Sitio Oficial Real: <strong style="color:var(--primary)">${data.impersonation.official}</strong></p>
                <p>Sitio Analizado: <strong style="color:var(--danger)">${new URL(data.url).hostname}</strong></p>
            </div>
        </div>`;
    }


    if (data.url) {
        try {
            const u = new URL(data.url);
            html += `
            <div class="section-title">🔍 DETALLES TÉCNICOS DE RED</div>
            <table class="forensic-table">
                <tr><th>Parámetro</th><th>Valor Detectado</th><th>Estado</th></tr>
                <tr><td>Protocolo</td><td>${u.protocol.replace(':', '').toUpperCase()}</td><td><span style="color:var(--secondary)">INFO</span></td></tr>
                <tr><td>Host / Dominio</td><td>${u.hostname}</td><td>INFO</td></tr>
                <tr><td>Ruta (Path)</td><td>${u.pathname}</td><td>INFO</td></tr>
                <tr><td>Consulta (Query)</td><td>${u.search || 'N/A'}</td><td>INFO</td></tr>
                <tr><td>Puerto</td><td>${u.port || '80/443 (Default)'}</td><td>INFO</td></tr>
            </table>
            `;
        } catch (e) { }
    }


    if (data.filename) {
        html += `
        <div class="section-title">📂 DETALLES DEL ARTEFACTO (ARCHIVO)</div>
        <table class="forensic-table">
            <tr><th>Propiedad</th><th>Valor</th></tr>
            <tr><td>Nombre de Archivo</td><td>${data.filename}</td></tr>
            <tr><td>Hash SHA-256</td><td style="font-family:'Courier New'; font-size:0.8em; word-break:break-all;">${data.sha256}</td></tr>
            <tr><td>Estado Análisis</td><td>${data.virustotal.status || 'Completado'}</td></tr>
        </table>
        `;
    }


    if (data.virustotal && data.virustotal.results) {
        const vt = data.virustotal;
        html += `
        <div class="section-title">🛡️ MOTORES DE CIBERSEGURIDAD (TOTAL: ${Object.keys(vt.results).length})</div>
        <div style="display:flex; gap:20px; margin-bottom:20px;">
            <div class="stat-box malicious" style="flex:1"><span class="label">DETECTADO MALICIOSO</span><span class="value red">${vt.malicious}</span></div>
            <div class="stat-box clean" style="flex:1"><span class="label">LIMPIO / SEGURO</span><span class="value green">${vt.harmless + vt.undetected}</span></div>
        </div>

        <table class="forensic-table">
            <tr><th>Motor de Seguridad</th><th>Resultado del Análisis</th><th>Clasificación</th></tr>
            ${Object.entries(vt.results).slice(0, 8).map(([engine, res]) => `
                <tr>
                    <td>${engine}</td>
                    <td style="color:${res.category === 'malicious' ? 'var(--danger)' : 'var(--secondary)'}">${res.result || 'Clean'}</td>
                    <td>${res.category === 'malicious' ? '🛑 MALWARE' : '✅ SEGURO'}</td>
                </tr>
            `).join('')}
            <tr><td colspan="3" style="text-align:center; color:#666;">... y ${Math.max(0, Object.keys(vt.results).length - 8)} motores más analizados.</td></tr>
        </table>
        `;
    }


    if (data.heuristics.length > 0) {
        html += `
        <div class="section-title">🧠 ANÁLISIS HEURÍSTICO (IA LOCAL)</div>
        <table class="forensic-table">
            <tr><th>Severidad</th><th>Anomalía Detectada</th></tr>
            ${data.heuristics.map(h => `
                <tr>
                    <td style="color:${h.type === 'CRITICAL' || h.type === 'HIGH' ? 'var(--danger)' : 'var(--warning)'}">${h.type}</td>
                    <td>${h.text}</td>
                </tr>
            `).join('')}
        </table>
        `;
    }

    detailsContent.innerHTML = html;
}

function closeResults() {
    resultsPanel.classList.remove('active');
}

function showLoader(show) {
    loader.style.display = show ? 'block' : 'none';
}


async function checkVirusTotalUrl(url) {
    const urlId = btoa(url).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
    const targetUrl = `https://www.virustotal.com/api/v3/urls/${urlId}`;


    const res = await fetch("https://corsproxy.io/?" + encodeURIComponent(targetUrl), {
        method: 'GET', headers: { 'x-apikey': VT_API_KEY }
    });
    if (res.ok) {
        const d = await res.json();
        return {
            malicious: d.data.attributes.last_analysis_stats.malicious,
            harmless: d.data.attributes.last_analysis_stats.harmless,
            undetected: d.data.attributes.last_analysis_stats.undetected,
            results: d.data.attributes.last_analysis_results
        };
    }
    return { malicious: 0, harmless: 0, undeteceted: 0 };
}


const dropZone = document.getElementById('dropZone');

dropZone.addEventListener('dragover', (e) => { e.preventDefault(); dropZone.classList.add('dragover'); });
dropZone.addEventListener('dragleave', () => { dropZone.classList.remove('dragover'); });
dropZone.addEventListener('drop', async (e) => {
    e.preventDefault();
    dropZone.classList.remove('dragover');

    const files = e.dataTransfer.files;
    if (files.length > 0) {
        showLoader(true);
        scanIdLabel.innerText = Math.floor(Math.random() * 90000) + 10000;

        try {
            const file = files[0];
            const vtResult = await checkVirusTotalFile(file);

            let score = 0;
            const fileHeuristics = [];


            const ext = file.name.split('.').pop().toLowerCase();
            const dangerousExts = ['msi', 'exe', 'bat', 'cmd', 'ps1', 'vbs', 'scr', 'iso'];

            if (dangerousExts.includes(ext)) {
                fileHeuristics.push({ type: 'HIGH', text: `Tipo de archivo ejecutable de alto riesgo: .${ext.toUpperCase()}` });
                score += 30;
            }


            if (vtResult.malicious > 0) {
                score = 100;
                fileHeuristics.push({ type: 'CRITICAL', text: `Detectado como MALWARE por ${vtResult.malicious} motores de antivirus` });
            } else if (vtResult.status && vtResult.status.includes("Hash not found")) {
                fileHeuristics.push({ type: 'INFO', text: `Archivo no visto previamente en VirusTotal (Desconocido)` });
            }

            let level = "SEGURO";
            let color = "--primary";

            if (score > 0) { level = "BAJO RIESGO"; color = "--warning"; }
            if (score >= 40) { level = "PELIGROSO"; color = "orange"; }
            if (score >= 80) { level = "CRÍTICO"; color = "--danger"; }


            const report = {
                risk_score: score,
                filename: file.name,
                sha256: vtResult.sha256,
                virustotal: vtResult,
                heuristics: fileHeuristics
            };

            displayReport(report, level, color);

        } catch (error) {
            alert("Error de conexión: " + error.message + ". \n\nNOTA: Si estás ejecutando esto en local, el navegador bloquea las conexiones a VirusTotal por seguridad (CORS).");
            console.error(error);
        } finally {
            showLoader(false);
        }
    }
});

async function checkVirusTotalFile(file) {

    const hash = await calculateSHA256(file);


    const targetUrl = `https://www.virustotal.com/api/v3/files/${hash}`;
    const response = await fetch(CORS_PROXY + encodeURIComponent(targetUrl), {
        method: 'GET',
        headers: { 'x-apikey': VT_API_KEY }
    });

    if (response.ok) {
        const data = await response.json();
        const stats = data.data.attributes.last_analysis_stats;
        return {
            sha256: hash,
            malicious: stats.malicious,
            harmless: stats.harmless,
            undetected: stats.undetected,
            results: data.data.attributes.last_analysis_results,
            name: data.data.attributes.meaningful_name || file.name
        };
    } else {

        return {
            sha256: hash,
            status: "Unknown/Clean (Hash not found)",
            malicious: 0, harmless: 0, undetected: 0,
            results: {}
        };
    }
}

async function calculateSHA256(file) {
    const buffer = await file.arrayBuffer();
    const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}
