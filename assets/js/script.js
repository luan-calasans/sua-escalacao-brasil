const STORAGE_KEY = 'selecao-brasileira-escalacao';
const IMAGES_BASE = 'assets/images/';

const players = [
	{
		id: 1,
		nome: 'Alisson',
		posicao: 'GOL',
		clube: 'Liverpool',
		foto: `${IMAGES_BASE}alisson.png`,
	},
	{
		id: 2,
		nome: 'Ederson',
		posicao: 'GOL',
		clube: 'Fenerbahçe',
		foto: `${IMAGES_BASE}ederson.png`,
	},
	{
		id: 3,
		nome: 'Weverton',
		posicao: 'GOL',
		clube: 'Grêmio',
		foto: `${IMAGES_BASE}weverton.png`,
	},
	{
		id: 4,
		nome: 'Alex Sandro',
		posicao: 'DEF',
		clube: 'Flamengo',
		foto: `${IMAGES_BASE}alex-sandro.png`,
	},
	{
		id: 5,
		nome: 'Bremer',
		posicao: 'DEF',
		clube: 'Juventus',
		foto: `${IMAGES_BASE}bremer.png`,
	},
	{
		id: 6,
		nome: 'Danilo',
		posicao: 'DEF',
		clube: 'Flamengo',
		foto: `${IMAGES_BASE}danilo-zagueiro.png`,
	},
	{
		id: 7,
		nome: 'Douglas Santos',
		nomeCurto: 'Douglas',
		posicao: 'DEF',
		clube: 'Zenit',
		foto: `${IMAGES_BASE}douglas.png`,
	},
	{
		id: 8,
		nome: 'Gabriel Magalhães',
		nomeCurto: 'Magalhães',
		posicao: 'DEF',
		clube: 'Arsenal',
		foto: `${IMAGES_BASE}gabriel-magalhaes.png`,
	},
	{
		id: 9,
		nome: 'Marquinhos',
		posicao: 'DEF',
		clube: 'PSG',
		foto: `${IMAGES_BASE}marquinhos.png`,
	},
	{
		id: 10,
		nome: 'Léo Pereira',
		nomeCurto: 'Léo',
		posicao: 'DEF',
		clube: 'Flamengo',
		foto: `${IMAGES_BASE}leo-pereira.png`,
	},
	{
		id: 26,
		nome: 'Ibañez',
		posicao: 'DEF',
		clube: 'Aston Villa',
		foto: `${IMAGES_BASE}ibanez.png`,
	},
	// { id: 27, nome: 'Wesley', posicao: 'DEF', clube: 'Roma', foto: `${IMAGES_BASE}wesley.png` },
	{
		id: 11,
		nome: 'Bruno Guimarães',
		nomeCurto: 'Guimarães',
		posicao: 'MEI',
		clube: 'Newcastle',
		foto: `${IMAGES_BASE}bruno guimaraes.png`,
	},
	{
		id: 12,
		nome: 'Casemiro',
		posicao: 'MEI',
		clube: 'Manchester United',
		foto: `${IMAGES_BASE}casemiro.png`,
	},
	{
		id: 13,
		nome: 'Danilo',
		posicao: 'MEI',
		clube: 'Botafogo',
		foto: `${IMAGES_BASE}danilo.png`,
	},
	{
		id: 14,
		nome: 'Fabinho',
		posicao: 'MEI',
		clube: 'Al-Ittihad',
		foto: `${IMAGES_BASE}fabinho.png`,
	},
	{
		id: 15,
		nome: 'Lucas Paquetá',
		nomeCurto: 'Paquetá',
		posicao: 'MEI',
		clube: 'Flamengo',
		foto: `${IMAGES_BASE}paqueta.png`,
	},
	{
		id: 25,
		nome: 'Éderson',
		posicao: 'MEI',
		clube: 'Atalanta',
		foto: `${IMAGES_BASE}éderson.png`,
	},
	{
		id: 16,
		nome: 'Endrick',
		posicao: 'ATA',
		clube: 'Lyon',
		foto: `${IMAGES_BASE}endrick.png`,
	},
	{
		id: 17,
		nome: 'Gabriel Martinelli',
		nomeCurto: 'Martinelli',
		posicao: 'ATA',
		clube: 'Arsenal',
		foto: `${IMAGES_BASE}martinelli.png`,
	},
	{
		id: 18,
		nome: 'Igor Thiago',
		posicao: 'ATA',
		clube: 'Brentford',
		foto: `${IMAGES_BASE}igor-thiago.png`,
	},
	{
		id: 19,
		nome: 'Luís Henrique',
		posicao: 'ATA',
		clube: 'Zenit',
		foto: `${IMAGES_BASE}luiz-henrique.png`,
	},
	{
		id: 20,
		nome: 'Matheus Cunha',
		nomeCurto: 'Matheus C.',
		posicao: 'ATA',
		clube: 'Manchester United',
		foto: `${IMAGES_BASE}matheus-cunha.png`,
	},
	{
		id: 21,
		nome: 'Neymar Jr.',
		posicao: 'ATA',
		clube: 'Santos',
		foto: `${IMAGES_BASE}neymar.png`,
	},
	{
		id: 22,
		nome: 'Raphinha',
		posicao: 'ATA',
		clube: 'Barcelona',
		foto: `${IMAGES_BASE}raphinha.png`,
	},
	{
		id: 23,
		nome: 'Rayan',
		posicao: 'ATA',
		clube: 'Bournemouth',
		foto: `${IMAGES_BASE}ryan.png`,
	},
	{
		id: 24,
		nome: 'Vinícius Júnior',
		nomeCurto: 'Vini Jr',
		posicao: 'ATA',
		clube: 'Real Madrid',
		foto: `${IMAGES_BASE}vinijr.png`,
	},
];

// Cores de avatar por posição
const AVATAR_COLORS = {
	GOL: ['#f59e0b', '#d97706'],
	DEF: ['#002776', '#001a4d'],
	MEI: ['#009c3b', '#006b2a'],
	ATA: ['#dc2626', '#991b1b'],
};

// Mapeamento papel no campo → categoria de jogador
const ROLE_TO_CATEGORY = {
	GOL: 'GOL',
	ZAG: 'DEF',
	LD: 'DEF',
	LE: 'DEF',
	VOL: 'MEI',
	MC: 'MEI',
	MEI: 'MEI',
	ATA: 'ATA',
	PE: 'ATA',
	PD: 'ATA',
};

const GOL = { role: 'GOL', x: 50, y: 88 };

// ===== Formações táticas (coordenadas em % do campo) =====
const formations = {
	'2-3-5': [
		GOL,
		{ role: 'ZAG', x: 35, y: 64 },
		{ role: 'ZAG', x: 65, y: 64 },
		{ role: 'MC', x: 25, y: 43 },
		{ role: 'MC', x: 50, y: 40 },
		{ role: 'MC', x: 75, y: 43 },
		{ role: 'ATA', x: 15, y: 16 },
		{ role: 'ATA', x: 32, y: 12 },
		{ role: 'ATA', x: 50, y: 10 },
		{ role: 'ATA', x: 68, y: 12 },
		{ role: 'ATA', x: 85, y: 16 },
	],
	'2-5-3': [
		GOL,
		{ role: 'ZAG', x: 35, y: 64 },
		{ role: 'ZAG', x: 65, y: 64 },
		{ role: 'MC', x: 15, y: 46 },
		{ role: 'MC', x: 32, y: 40 },
		{ role: 'MC', x: 50, y: 38 },
		{ role: 'MC', x: 68, y: 40 },
		{ role: 'MC', x: 85, y: 46 },
		{ role: 'ATA', x: 30, y: 12 },
		{ role: 'ATA', x: 50, y: 14 },
		{ role: 'ATA', x: 70, y: 12 },
	],
	'3-2-5': [
		GOL,
		{ role: 'ZAG', x: 25, y: 64 },
		{ role: 'ZAG', x: 50, y: 64 },
		{ role: 'ZAG', x: 75, y: 64 },
		{ role: 'MC', x: 38, y: 43 },
		{ role: 'MC', x: 62, y: 43 },
		{ role: 'ATA', x: 15, y: 16 },
		{ role: 'ATA', x: 32, y: 11 },
		{ role: 'ATA', x: 50, y: 14 },
		{ role: 'ATA', x: 68, y: 11 },
		{ role: 'ATA', x: 85, y: 16 },
	],
	'3-2-2-3': [
		GOL,
		{ role: 'ZAG', x: 25, y: 64 },
		{ role: 'ZAG', x: 50, y: 64 },
		{ role: 'ZAG', x: 75, y: 64 },
		{ role: 'MC', x: 38, y: 46 },
		{ role: 'MC', x: 62, y: 46 },
		{ role: 'MEI', x: 35, y: 40 },
		{ role: 'MEI', x: 65, y: 40 },
		{ role: 'ATA', x: 25, y: 12 },
		{ role: 'ATA', x: 50, y: 14 },
		{ role: 'ATA', x: 75, y: 12 },
	],
	'3-3-4': [
		GOL,
		{ role: 'ZAG', x: 25, y: 64 },
		{ role: 'ZAG', x: 50, y: 64 },
		{ role: 'ZAG', x: 75, y: 64 },
		{ role: 'MC', x: 25, y: 43 },
		{ role: 'MC', x: 50, y: 40 },
		{ role: 'MC', x: 75, y: 43 },
		{ role: 'ATA', x: 22, y: 16 },
		{ role: 'ATA', x: 42, y: 11 },
		{ role: 'ATA', x: 58, y: 11 },
		{ role: 'ATA', x: 78, y: 16 },
	],
	'3-4-3': [
		GOL,
		{ role: 'ZAG', x: 25, y: 64 },
		{ role: 'ZAG', x: 50, y: 64 },
		{ role: 'ZAG', x: 75, y: 64 },
		{ role: 'MC', x: 18, y: 43 },
		{ role: 'MC', x: 38, y: 40 },
		{ role: 'MC', x: 62, y: 40 },
		{ role: 'MC', x: 82, y: 43 },
		{ role: 'ATA', x: 28, y: 12 },
		{ role: 'ATA', x: 50, y: 14 },
		{ role: 'ATA', x: 72, y: 12 },
	],
	'3-4-2-1': [
		GOL,
		{ role: 'ZAG', x: 25, y: 64 },
		{ role: 'ZAG', x: 50, y: 64 },
		{ role: 'ZAG', x: 75, y: 64 },
		{ role: 'MC', x: 18, y: 43 },
		{ role: 'MC', x: 38, y: 40 },
		{ role: 'MC', x: 62, y: 40 },
		{ role: 'MC', x: 82, y: 43 },
		{ role: 'MEI', x: 38, y: 32 },
		{ role: 'MEI', x: 62, y: 32 },
		{ role: 'ATA', x: 50, y: 10 },
	],
	'3-4-1-2': [
		GOL,
		{ role: 'ZAG', x: 25, y: 64 },
		{ role: 'ZAG', x: 50, y: 64 },
		{ role: 'ZAG', x: 75, y: 64 },
		{ role: 'MC', x: 18, y: 43 },
		{ role: 'MC', x: 38, y: 40 },
		{ role: 'MC', x: 62, y: 40 },
		{ role: 'MC', x: 82, y: 43 },
		{ role: 'MEI', x: 50, y: 35 },
		{ role: 'ATA', x: 38, y: 16 },
		{ role: 'ATA', x: 62, y: 16 },
	],
	'3-5-2': [
		GOL,
		{ role: 'ZAG', x: 25, y: 64 },
		{ role: 'ZAG', x: 50, y: 64 },
		{ role: 'ZAG', x: 75, y: 64 },
		{ role: 'MC', x: 15, y: 43 },
		{ role: 'MC', x: 32, y: 40 },
		{ role: 'MC', x: 50, y: 38 },
		{ role: 'MC', x: 68, y: 40 },
		{ role: 'MC', x: 85, y: 43 },
		{ role: 'ATA', x: 38, y: 12 },
		{ role: 'ATA', x: 62, y: 12 },
	],
	'3-1-4-2': [
		GOL,
		{ role: 'ZAG', x: 25, y: 64 },
		{ role: 'ZAG', x: 50, y: 64 },
		{ role: 'ZAG', x: 75, y: 64 },
		{ role: 'VOL', x: 50, y: 50 },
		{ role: 'MC', x: 18, y: 36 },
		{ role: 'MC', x: 38, y: 45 },
		{ role: 'MC', x: 62, y: 45 },
		{ role: 'MC', x: 82, y: 36 },
		{ role: 'ATA', x: 38, y: 16 },
		{ role: 'ATA', x: 62, y: 16 },
	],
	'3-6-1': [
		GOL,
		{ role: 'ZAG', x: 25, y: 64 },
		{ role: 'ZAG', x: 50, y: 64 },
		{ role: 'ZAG', x: 75, y: 64 },
		{ role: 'MC', x: 12, y: 43 },
		{ role: 'MC', x: 28, y: 40 },
		{ role: 'MC', x: 42, y: 38 },
		{ role: 'MC', x: 58, y: 38 },
		{ role: 'MC', x: 72, y: 40 },
		{ role: 'MC', x: 88, y: 43 },
		{ role: 'ATA', x: 50, y: 10 },
	],
	'4-1-4-1': [
		GOL,
		{ role: 'LE', x: 12, y: 57 },
		{ role: 'ZAG', x: 35, y: 64 },
		{ role: 'ZAG', x: 65, y: 64 },
		{ role: 'LD', x: 88, y: 57 },
		{ role: 'VOL', x: 50, y: 52 },
		{ role: 'MC', x: 18, y: 45 },
		{ role: 'MC', x: 38, y: 42 },
		{ role: 'MC', x: 62, y: 42 },
		{ role: 'MC', x: 82, y: 45 },
		{ role: 'ATA', x: 50, y: 10 },
	],
	'4-1-2-1-2': [
		GOL,
		{ role: 'LE', x: 12, y: 57 },
		{ role: 'ZAG', x: 35, y: 64 },
		{ role: 'ZAG', x: 65, y: 64 },
		{ role: 'LD', x: 88, y: 57 },
		{ role: 'VOL', x: 50, y: 60 },
		{ role: 'MC', x: 35, y: 36 },
		{ role: 'MC', x: 65, y: 36 },
		{ role: 'MEI', x: 50, y: 35 },
		{ role: 'ATA', x: 38, y: 16 },
		{ role: 'ATA', x: 62, y: 16 },
	],
	'4-2-4': [
		GOL,
		{ role: 'LE', x: 12, y: 57 },
		{ role: 'ZAG', x: 35, y: 64 },
		{ role: 'ZAG', x: 65, y: 64 },
		{ role: 'LD', x: 88, y: 57 },
		{ role: 'MC', x: 38, y: 43 },
		{ role: 'MC', x: 62, y: 43 },
		{ role: 'ATA', x: 18, y: 16 },
		{ role: 'ATA', x: 42, y: 11 },
		{ role: 'ATA', x: 58, y: 11 },
		{ role: 'ATA', x: 82, y: 16 },
	],
	'4-2-3-1': [
		GOL,
		{ role: 'LE', x: 12, y: 57 },
		{ role: 'ZAG', x: 35, y: 64 },
		{ role: 'ZAG', x: 65, y: 64 },
		{ role: 'LD', x: 88, y: 57 },
		{ role: 'MC', x: 38, y: 43 },
		{ role: 'MC', x: 62, y: 43 },
		{ role: 'MEI', x: 22, y: 35 },
		{ role: 'MEI', x: 50, y: 32 },
		{ role: 'MEI', x: 78, y: 35 },
		{ role: 'ATA', x: 50, y: 14 },
	],
	'4-2-2-2': [
		GOL,
		{ role: 'LE', x: 12, y: 57 },
		{ role: 'ZAG', x: 35, y: 64 },
		{ role: 'ZAG', x: 65, y: 64 },
		{ role: 'LD', x: 88, y: 57 },
		{ role: 'MC', x: 38, y: 43 },
		{ role: 'MC', x: 62, y: 43 },
		{ role: 'MEI', x: 35, y: 35 },
		{ role: 'MEI', x: 65, y: 35 },
		{ role: 'ATA', x: 38, y: 16 },
		{ role: 'ATA', x: 62, y: 16 },
	],
	'4-2-1-3': [
		GOL,
		{ role: 'LE', x: 12, y: 57 },
		{ role: 'ZAG', x: 35, y: 64 },
		{ role: 'ZAG', x: 65, y: 64 },
		{ role: 'LD', x: 88, y: 57 },
		{ role: 'MC', x: 38, y: 43 },
		{ role: 'MC', x: 62, y: 43 },
		{ role: 'MEI', x: 50, y: 38 },
		{ role: 'ATA', x: 25, y: 16 },
		{ role: 'ATA', x: 50, y: 13 },
		{ role: 'ATA', x: 75, y: 16 },
	],
	'4-3-3': [
		GOL,
		{ role: 'LE', x: 12, y: 57 },
		{ role: 'ZAG', x: 35, y: 64 },
		{ role: 'ZAG', x: 65, y: 64 },
		{ role: 'LD', x: 88, y: 57 },
		{ role: 'MC', x: 28, y: 40 },
		{ role: 'MC', x: 50, y: 38 },
		{ role: 'MC', x: 72, y: 40 },
		{ role: 'ATA', x: 22, y: 12 },
		{ role: 'ATA', x: 50, y: 14 },
		{ role: 'ATA', x: 78, y: 12 },
	],
	'4-3-2-1': [
		GOL,
		{ role: 'LE', x: 12, y: 57 },
		{ role: 'ZAG', x: 35, y: 64 },
		{ role: 'ZAG', x: 65, y: 64 },
		{ role: 'LD', x: 88, y: 57 },
		{ role: 'MC', x: 28, y: 40 },
		{ role: 'MC', x: 50, y: 38 },
		{ role: 'MC', x: 72, y: 40 },
		{ role: 'MEI', x: 38, y: 30 },
		{ role: 'MEI', x: 62, y: 30 },
		{ role: 'ATA', x: 50, y: 14 },
	],
	'4-4-2': [
		GOL,
		{ role: 'LE', x: 12, y: 57 },
		{ role: 'ZAG', x: 35, y: 64 },
		{ role: 'ZAG', x: 65, y: 64 },
		{ role: 'LD', x: 88, y: 57 },
		{ role: 'MC', x: 18, y: 40 },
		{ role: 'MC', x: 38, y: 38 },
		{ role: 'MC', x: 62, y: 38 },
		{ role: 'MC', x: 82, y: 40 },
		{ role: 'ATA', x: 38, y: 16 },
		{ role: 'ATA', x: 62, y: 16 },
	],
	'4-5-1': [
		GOL,
		{ role: 'LE', x: 12, y: 57 },
		{ role: 'ZAG', x: 35, y: 64 },
		{ role: 'ZAG', x: 65, y: 64 },
		{ role: 'LD', x: 88, y: 57 },
		{ role: 'MC', x: 15, y: 40 },
		{ role: 'MC', x: 32, y: 38 },
		{ role: 'MC', x: 50, y: 36 },
		{ role: 'MC', x: 68, y: 38 },
		{ role: 'MC', x: 85, y: 40 },
		{ role: 'ATA', x: 50, y: 14 },
	],
	'4-6-0': [
		GOL,
		{ role: 'LE', x: 12, y: 57 },
		{ role: 'ZAG', x: 35, y: 64 },
		{ role: 'ZAG', x: 65, y: 64 },
		{ role: 'LD', x: 88, y: 57 },
		{ role: 'MC', x: 12, y: 36 },
		{ role: 'MC', x: 28, y: 45 },
		{ role: 'MC', x: 42, y: 42 },
		{ role: 'MC', x: 58, y: 42 },
		{ role: 'MC', x: 72, y: 45 },
		{ role: 'MC', x: 88, y: 36 },
	],
	'5-2-3': [
		GOL,
		{ role: 'LE', x: 6, y: 57 },
		{ role: 'ZAG', x: 24, y: 64 },
		{ role: 'ZAG', x: 50, y: 64 },
		{ role: 'ZAG', x: 76, y: 64 },
		{ role: 'LD', x: 94, y: 57 },
		{ role: 'MC', x: 38, y: 40 },
		{ role: 'MC', x: 62, y: 40 },
		{ role: 'ATA', x: 28, y: 12 },
		{ role: 'ATA', x: 50, y: 14 },
		{ role: 'ATA', x: 72, y: 12 },
	],
	'5-2-1-2': [
		GOL,
		{ role: 'LE', x: 6, y: 57 },
		{ role: 'ZAG', x: 24, y: 64 },
		{ role: 'ZAG', x: 50, y: 64 },
		{ role: 'ZAG', x: 76, y: 64 },
		{ role: 'LD', x: 94, y: 57 },
		{ role: 'MC', x: 38, y: 40 },
		{ role: 'MC', x: 62, y: 40 },
		{ role: 'MEI', x: 50, y: 35 },
		{ role: 'ATA', x: 38, y: 16 },
		{ role: 'ATA', x: 62, y: 16 },
	],
	'5-3-2': [
		GOL,
		{ role: 'LE', x: 6, y: 57 },
		{ role: 'ZAG', x: 24, y: 64 },
		{ role: 'ZAG', x: 50, y: 64 },
		{ role: 'ZAG', x: 76, y: 64 },
		{ role: 'LD', x: 94, y: 57 },
		{ role: 'MC', x: 28, y: 40 },
		{ role: 'MC', x: 50, y: 38 },
		{ role: 'MC', x: 72, y: 40 },
		{ role: 'ATA', x: 38, y: 16 },
		{ role: 'ATA', x: 62, y: 16 },
	],
	'5-4-1': [
		GOL,
		{ role: 'LE', x: 6, y: 57 },
		{ role: 'ZAG', x: 24, y: 64 },
		{ role: 'ZAG', x: 50, y: 64 },
		{ role: 'ZAG', x: 76, y: 64 },
		{ role: 'LD', x: 94, y: 57 },
		{ role: 'MC', x: 18, y: 40 },
		{ role: 'MC', x: 38, y: 38 },
		{ role: 'MC', x: 62, y: 38 },
		{ role: 'MC', x: 82, y: 40 },
		{ role: 'ATA', x: 50, y: 14 },
	],
};

let currentFormation = '4-3-3';
/** @type {(number|null)[]} IDs dos jogadores em cada slot (índice = slot) */
let lineup = [];
let activeSlotIndex = null;
let draggedPlayerId = null;
let draggedFromSlot = null;

let pickedPlayerId = null;

let pendingSubstitute = null;

const isTouchUI = window.matchMedia('(pointer: coarse)').matches;
const mobileMedia = window.matchMedia('(max-width: 1024px)');

function isMobileView() {
	return mobileMedia.matches;
}

const formationSelect = document.getElementById('formation-select');
const positionsContainer = document.getElementById('positions-container');
const benchEl = document.getElementById('bench');
const modalOverlay = document.getElementById('modal-overlay');
const modalTitle = document.getElementById('modal-title');
const modalSearch = document.getElementById('modal-search');
const modalPositionFilter = document.getElementById('modal-position-filter');
const modalPlayers = document.getElementById('modal-players');
const btnClear = document.getElementById('btn-clear');
const btnDownload = document.getElementById('btn-download');
const confirmClearOverlay = document.getElementById('confirm-clear-overlay');
const confirmClearCancel = document.getElementById('confirm-clear-cancel');
const confirmClearOk = document.getElementById('confirm-clear-ok');
const confirmSubstituteOverlay = document.getElementById(
	'confirm-substitute-overlay',
);
const confirmSubstituteText = document.getElementById(
	'confirm-substitute-text',
);
const confirmSubstituteCancel = document.getElementById(
	'confirm-substitute-cancel',
);
const confirmSubstituteOk = document.getElementById('confirm-substitute-ok');
const pickBanner = document.getElementById('pick-banner');
const pickBannerText = document.getElementById('pick-banner-text');
const pickBannerCancel = document.getElementById('pick-banner-cancel');
const modalRemoveBtn = document.getElementById('modal-remove');

// ===== Utilitários =====

function getPlayerDisplayName(player) {
	return player?.nomeCurto || player?.nome || '';
}

const hoverFinePointer = window.matchMedia(
	'(hover: hover) and (pointer: fine)',
);
let playerNameTooltipEl = null;

function ensurePlayerNameTooltip() {
	if (playerNameTooltipEl) return playerNameTooltipEl;
	playerNameTooltipEl = document.createElement('div');
	playerNameTooltipEl.className = 'player-name-tooltip';
	playerNameTooltipEl.hidden = true;
	playerNameTooltipEl.setAttribute('role', 'tooltip');
	document.body.appendChild(playerNameTooltipEl);
	return playerNameTooltipEl;
}

function bindPlayerNameTooltip(el, player) {
	if (!player) return;
	el.title = player.nome;

	if (!hoverFinePointer.matches) return;

	const tip = ensurePlayerNameTooltip();

	const position = (e) => {
		tip.style.left = `${e.clientX}px`;
		tip.style.top = `${e.clientY}px`;
	};

	const show = (e) => {
		tip.textContent = player.nome;
		position(e);
		tip.hidden = false;
	};

	const hide = () => {
		tip.hidden = true;
	};

	el.addEventListener('mouseenter', show);
	el.addEventListener('mousemove', position);
	el.addEventListener('mouseleave', hide);
}

/** Gera iniciais do nome para avatar */
function getInitials(nome) {
	return nome
		.split(/\s+/)
		.filter(Boolean)
		.slice(0, 2)
		.map((w) => w[0])
		.join('')
		.toUpperCase();
}

function createPhotoElement(player, className) {
	const wrap = document.createElement('div');
	wrap.className = `${className}-wrap`;

	const colors = AVATAR_COLORS[player.posicao] || AVATAR_COLORS.MEI;

	const fallback = document.createElement('span');
	fallback.className = `${className} ${className}--fallback`;
	fallback.style.background = `linear-gradient(135deg, ${colors[0]}, ${colors[1]})`;
	fallback.textContent = getInitials(player.nome);
	fallback.setAttribute('aria-hidden', 'true');

	if (player.foto) {
		const img = document.createElement('img');
		img.src = player.foto;
		img.alt = player.nome;
		img.className = className;
		img.loading = 'lazy';
		img.decoding = 'async';
		img.onerror = () => {
			img.remove();
			wrap.appendChild(fallback);
		};
		wrap.appendChild(img);
	} else {
		wrap.appendChild(fallback);
	}

	return wrap;
}

function getPlayerById(id) {
	return players.find((p) => p.id === id) || null;
}

function isPlayerOnField(playerId) {
	return lineup.includes(playerId);
}

function getSlotIndexForPlayer(playerId) {
	return lineup.indexOf(playerId);
}

function getAllowedCategoriesForSlot(slotRole) {
	const category = ROLE_TO_CATEGORY[slotRole];
	if (category === 'MEI' || category === 'ATA') {
		return ['MEI', 'ATA'];
	}
	return [category];
}

function isPlayerCompatible(player, slotRole) {
	return getAllowedCategoriesForSlot(slotRole).includes(player.posicao);
}

function clearPickedPlayer() {
	pickedPlayerId = null;
	pickBanner.classList.add('hidden');
	document.body.classList.remove('pick-mode');
	renderBench();
}

function setPickedPlayer(playerId) {
	const player = getPlayerById(playerId);
	if (!player || isPlayerOnField(playerId)) return;
	pickedPlayerId = playerId;
	pickBannerText.textContent = `Toque em uma posição para escalar ${player.nome}`;
	pickBanner.classList.remove('hidden');
	document.body.classList.add('pick-mode');
	renderBench();
}

function handleSlotTap(index) {
	if (!isMobileView() && pickedPlayerId !== null) {
		const player = getPlayerById(pickedPlayerId);
		const role = formations[currentFormation][index].role;
		if (player && isPlayerCompatible(player, role)) {
			const currentId = lineup[index];
			if (
				currentId != null &&
				currentId !== pickedPlayerId &&
				shouldConfirmSubstitute(currentId, pickedPlayerId)
			) {
				requestSubstitute(index, pickedPlayerId, () => clearPickedPlayer());
				return;
			}
			selectPlayer(index, pickedPlayerId);
			clearPickedPlayer();
			return;
		}
	}
	openModal(index);
}

function measureFieldMarkerSize() {
	const withLabel = true;
	const wrap = document.createElement('div');
	wrap.className = `position-slot filled ${withLabel ? 'slot--with-label' : 'slot--photo-only'}`;
	wrap.style.cssText =
		'position:absolute;left:-9999px;top:0;visibility:hidden;pointer-events:none';

	const inner = document.createElement('div');
	inner.className = 'slot-inner';

	const photoWrap = document.createElement('div');
	photoWrap.className = 'slot-photo-wrap';
	inner.appendChild(photoWrap);

	if (withLabel) {
		const meta = document.createElement('div');
		meta.className = 'slot-meta';
		meta.innerHTML =
			'<span class="slot-name">Magalhães</span><span class="slot-role slot-role--field">ZAG</span>';
		inner.appendChild(meta);
	}

	wrap.appendChild(inner);
	document.body.appendChild(wrap);
	const size = { w: wrap.offsetWidth || 56, h: wrap.offsetHeight || 56 };
	wrap.remove();
	return size;
}

function getFieldLayoutSpacing() {
	const pitch = document.querySelector('.pitch');
	const fieldW = pitch?.clientWidth || window.innerWidth;
	const fieldH = pitch?.clientHeight || window.innerHeight * 0.55;
	const marker = measureFieldMarkerSize();

	const gapPx =
		window.innerWidth <= 375 ? 16 : window.innerWidth <= 1024 ? 14 : 20;
	const minXPct = ((marker.w + gapPx) / fieldW) * 100;
	const minYPct = ((marker.h + gapPx) / fieldH) * 100;

	return {
		rowBandPct: Math.min(minYPct * (isMobileView() ? 0.72 : 0.85), 11),
		minXPct: Math.max(minXPct, isMobileView() ? 16 : 20),
		minYPct: Math.max(minYPct, 12),
		edgeLeft: isMobileView() ? 7 : 6,
		edgeRight: isMobileView() ? 93 : 94,
	};
}

function clusterItemsByRow(items, bandPct) {
	let bands = items.map((item) => [item]);
	let merged = true;
	while (merged) {
		merged = false;
		for (let i = 0; i < bands.length; i++) {
			for (let j = i + 1; j < bands.length; j++) {
				const sameRow = bands[i].some((a) =>
					bands[j].some((b) => Math.abs(a.y - b.y) < bandPct),
				);
				if (sameRow) {
					bands[i] = [...bands[i], ...bands[j]];
					bands.splice(j, 1);
					merged = true;
					break;
				}
			}
			if (merged) break;
		}
	}
	return bands.filter((band) => band.length > 1);
}

function spreadFieldRows(items, spacing) {
	const { edgeLeft: left, edgeRight: right, minXPct, rowBandPct } = spacing;

	clusterItemsByRow(items, rowBandPct).forEach((band) => {
		band.sort((a, b) => a.x - b.x);
		const n = band.length;
		const minSpan = (n - 1) * minXPct;
		const usable = right - left;

		if (minSpan <= usable) {
			const start = left + (usable - minSpan) / 2;
			band.forEach((item, i) => {
				item.x = start + i * minXPct;
			});
		} else {
			const step = usable / (n - 1);
			band.forEach((item, i) => {
				item.x = left + i * step;
			});
		}

		if (n > 1) {
			const avgY = band.reduce((sum, it) => sum + it.y, 0) / n;
			band.forEach((item) => {
				item.y = avgY;
			});
		}
	});
}

function spaceFieldColumns(items, spacing) {
	const { minYPct } = spacing;
	const columns = new Map();

	items.forEach((item) => {
		const col = Math.round(item.x / 8) * 8;
		if (!columns.has(col)) columns.set(col, []);
		columns.get(col).push(item);
	});

	columns.forEach((group) => {
		if (group.length < 2) return;
		group.sort((a, b) => a.y - b.y);
		for (let i = 1; i < group.length; i++) {
			if (group[i].y - group[i - 1].y < minYPct) {
				group[i].y = group[i - 1].y + minYPct;
			}
		}
		const overflow = group[group.length - 1].y - 90;
		if (overflow > 0) {
			group.forEach((item) => {
				item.y -= overflow;
			});
		}
		const underflow = 8 - group[0].y;
		if (underflow > 0) {
			group.forEach((item) => {
				item.y += underflow;
			});
		}
	});
}

function resolveFieldOverlaps(items, spacing) {
	const { minXPct, minYPct } = spacing;

	for (let pass = 0; pass < 80; pass++) {
		let moved = false;
		for (let i = 0; i < items.length; i++) {
			for (let j = i + 1; j < items.length; j++) {
				const a = items[i];
				const b = items[j];
				const dx = Math.abs(a.x - b.x);
				const dy = Math.abs(a.y - b.y);
				if (dx >= minXPct || dy >= minYPct) continue;

				const pushX = (minXPct - dx) / 2 + 0.8;
				const pushY = (minYPct - dy) / 2 + 0.8;

				if (dy / minYPct < dx / minXPct) {
					if (a.x <= b.x) {
						a.x -= pushX;
						b.x += pushX;
					} else {
						a.x += pushX;
						b.x -= pushX;
					}
				} else if (a.y <= b.y) {
					a.y -= pushY;
					b.y += pushY;
				} else {
					a.y += pushY;
					b.y -= pushY;
				}
				moved = true;
			}
		}
		if (!moved) break;
	}

	items.forEach((item) => {
		item.x = Math.max(spacing.edgeLeft, Math.min(spacing.edgeRight, item.x));
		item.y = Math.max(8, Math.min(90, item.y));
	});
}

function computeDisplayPositions(slots) {
	const items = slots.map((slot, index) => ({ index, x: slot.x, y: slot.y }));
	const spacing = getFieldLayoutSpacing();

	spreadFieldRows(items, spacing);
	spaceFieldColumns(items, spacing);
	resolveFieldOverlaps(items, spacing);
	spreadFieldRows(items, spacing);
	spaceFieldColumns(items, spacing);
	resolveFieldOverlaps(items, spacing);

	return {
		y: new Map(items.map((item) => [item.index, item.y])),
		x: new Map(items.map((item) => [item.index, item.x])),
	};
}

function renderFormation() {
	const slots = formations[currentFormation];
	if (!slots) return;

	const { y: displayY, x: displayX } = computeDisplayPositions(slots);
	positionsContainer.innerHTML = '';

	slots.forEach((slot, index) => {
		const playerId = lineup[index] ?? null;
		const player = playerId ? getPlayerById(playerId) : null;
		const topY = displayY.get(index) ?? slot.y;
		const leftX = displayX.get(index) ?? slot.x;

		const showFieldLabel = !!player;
		const el = document.createElement('div');
		el.className = `position-slot${player ? ' filled' : ''}${
			showFieldLabel ? ' slot--with-label' : player ? ' slot--photo-only' : ''
		}`;
		el.style.left = `${leftX}%`;
		el.style.top = `${topY}%`;
		el.dataset.slotIndex = String(index);
		el.dataset.role = slot.role;
		el.setAttribute('role', 'button');
		el.setAttribute('tabindex', '0');
		el.setAttribute(
			'aria-label',
			player ? `${player.nome}, ${slot.role}` : `Posição ${slot.role}, vazio`,
		);

		const inner = document.createElement('div');
		inner.className = 'slot-inner';

		if (player) {
			inner.appendChild(createPhotoElement(player, 'slot-photo'));
			if (showFieldLabel) {
				const meta = document.createElement('div');
				meta.className = 'slot-meta';
				const name = document.createElement('span');
				name.className = 'slot-name';
				name.textContent = getPlayerDisplayName(player);
				name.title = player.nome;
				const roleTag = document.createElement('span');
				roleTag.className = 'slot-role slot-role--field';
				roleTag.textContent = slot.role;
				meta.appendChild(name);
				meta.appendChild(roleTag);
				inner.appendChild(meta);
			} else {
				bindPlayerNameTooltip(el, player);
			}
			el.draggable = !isTouchUI && !isMobileView();
		} else {
			const roleLabel = document.createElement('span');
			roleLabel.className = 'slot-role';
			roleLabel.textContent = slot.role;
			inner.appendChild(roleLabel);
			const icon = document.createElement('span');
			icon.className = 'slot-empty-icon';
			icon.textContent = '+';
			inner.appendChild(icon);
		}

		el.appendChild(inner);

		el.addEventListener('click', () => handleSlotTap(index));

		el.addEventListener('keydown', (e) => {
			if (e.key === 'Enter' || e.key === ' ') {
				e.preventDefault();
				handleSlotTap(index);
			}
		});

		el.addEventListener('dragover', (e) => {
			e.preventDefault();
			el.classList.add('drag-over');
		});
		el.addEventListener('dragleave', () => el.classList.remove('drag-over'));
		el.addEventListener('drop', (e) => {
			e.preventDefault();
			el.classList.remove('drag-over');
			dragPlayer(draggedPlayerId, draggedFromSlot, index);
			draggedPlayerId = null;
			draggedFromSlot = null;
		});

		// jogador no campo
		if (player) {
			el.addEventListener('dragstart', (e) => {
				draggedPlayerId = player.id;
				draggedFromSlot = index;
				e.dataTransfer.setData('text/plain', String(player.id));
				e.dataTransfer.effectAllowed = 'move';
			});
			el.addEventListener('dragend', () => {
				draggedPlayerId = null;
				draggedFromSlot = null;
			});
		}

		positionsContainer.appendChild(el);
	});

	updateDownloadButton();
}

function changeFormation(newFormation) {
	const oldLineup = [...lineup];
	const oldSlots = formations[currentFormation];
	const newSlots = formations[newFormation];

	currentFormation = newFormation;
	lineup = new Array(newSlots.length).fill(null);

	if (oldSlots && oldLineup.length) {
		const usedPlayers = new Set();

		newSlots.forEach((newSlot, newIdx) => {
			for (let oldIdx = 0; oldIdx < oldSlots.length; oldIdx++) {
				const pid = oldLineup[oldIdx];
				if (!pid || usedPlayers.has(pid)) continue;
				const player = getPlayerById(pid);
				if (!player) continue;
				const oldRole = oldSlots[oldIdx].role;
				const newRole = newSlot.role;
				if (
					oldRole === newRole ||
					(ROLE_TO_CATEGORY[oldRole] === ROLE_TO_CATEGORY[newRole] &&
						isPlayerCompatible(player, newRole))
				) {
					lineup[newIdx] = pid;
					usedPlayers.add(pid);
					break;
				}
			}
		});

		newSlots.forEach((newSlot, newIdx) => {
			if (lineup[newIdx]) return;
			for (let oldIdx = 0; oldIdx < oldLineup.length; oldIdx++) {
				const pid = oldLineup[oldIdx];
				if (!pid || usedPlayers.has(pid)) continue;
				const player = getPlayerById(pid);
				if (player && isPlayerCompatible(player, newSlot.role)) {
					lineup[newIdx] = pid;
					usedPlayers.add(pid);
					break;
				}
			}
		});
	}

	saveTeam();
	renderFormation();
	renderBench();
}

const modalEl = () => document.querySelector('.modal');
const modalFiltersEl = () => document.querySelector('.modal-filters');

const POS_LABEL = {
	GOL: 'Goleiro',
	DEF: 'Defensor',
	MEI: 'Meio-campista',
	ATA: 'Atacante',
};

function openModal(slotIndex) {
	activeSlotIndex = slotIndex;
	const slot = formations[currentFormation][slotIndex];
	const hasPlayer = lineup[slotIndex] != null;
	const category = ROLE_TO_CATEGORY[slot.role];
	const allowedCategories = getAllowedCategoriesForSlot(slot.role);
	const posLabel =
		allowedCategories.length > 1
			? 'Meias / Atacantes'
			: POS_LABEL[category] || category;

	modalTitle.textContent = isMobileView()
		? `${slot.role} — ${posLabel}`
		: `Escolher jogador — ${slot.role}`;
	modalPositionFilter.value = category;
	modalFiltersEl()?.classList.add('filter-by-slot');
	modalEl()?.classList.add('modal--slot-pick');

	modalSearch.value = '';
	modalRemoveBtn.classList.toggle('hidden', !hasPlayer);
	renderModalPlayers();
	modalOverlay.classList.remove('hidden');
	document.body.classList.add('modal-open');
}

function closeModal() {
	modalOverlay.classList.add('hidden');
	document.body.classList.remove('modal-open');
	modalFiltersEl()?.classList.remove('filter-by-slot');
	modalEl()?.classList.remove('modal--slot-pick');
	activeSlotIndex = null;
}

function removePlayerFromSlot() {
	if (activeSlotIndex === null) return;
	lineup[activeSlotIndex] = null;
	closeModal();
	saveTeam();
	renderFormation();
	renderBench();
}

function shouldConfirmSubstitute(currentPlayerId, newPlayerId) {
	const current = getPlayerById(currentPlayerId);
	const next = getPlayerById(newPlayerId);
	if (!current || !next) return false;
	return current.posicao === next.posicao;
}

function requestSubstitute(slotIndex, newPlayerId, onConfirm) {
	const currentId = lineup[slotIndex];
	const current = getPlayerById(currentId);
	const next = getPlayerById(newPlayerId);
	if (!current || !next) return;

	pendingSubstitute = { slotIndex, newPlayerId, onConfirm: onConfirm || null };
	confirmSubstituteText.textContent = `Já existe um jogador nesta posição (${current.nome}). Deseja substituir por ${next.nome}?`;
	confirmSubstituteOverlay.classList.remove('hidden');
	document.body.classList.add('modal-open');
	confirmSubstituteCancel.focus();
}

function closeConfirmSubstitute() {
	confirmSubstituteOverlay.classList.add('hidden');
	pendingSubstitute = null;
	if (
		modalOverlay.classList.contains('hidden') &&
		confirmClearOverlay.classList.contains('hidden')
	) {
		document.body.classList.remove('modal-open');
	}
}

function confirmSubstitutePlayer() {
	if (!pendingSubstitute) return;
	const { slotIndex, newPlayerId, onConfirm } = pendingSubstitute;
	closeConfirmSubstitute();
	selectPlayer(slotIndex, newPlayerId);
	if (onConfirm) onConfirm();
}

function handleBenchPlayerClick(playerId) {
	const player = getPlayerById(playerId);
	if (!player || isPlayerOnField(playerId)) return;

	const slots = formations[currentFormation];
	const emptyCompatible = [];
	const filledSamePosicao = [];

	slots.forEach((slot, index) => {
		if (!isPlayerCompatible(player, slot.role)) return;
		const occupantId = lineup[index];
		if (occupantId == null) {
			emptyCompatible.push(index);
			return;
		}
		const occupant = getPlayerById(occupantId);
		if (occupant?.posicao === player.posicao) {
			filledSamePosicao.push(index);
		}
	});

	if (emptyCompatible.length > 0) {
		selectPlayer(emptyCompatible[0], playerId);
		return;
	}

	if (filledSamePosicao.length === 1) {
		requestSubstitute(filledSamePosicao[0], playerId);
		return;
	}

	if (filledSamePosicao.length > 1) {
		openModal(filledSamePosicao[0]);
		return;
	}

	const filledCompatible = [];
	slots.forEach((slot, index) => {
		if (!isPlayerCompatible(player, slot.role)) return;
		if (lineup[index] != null) filledCompatible.push(index);
	});

	if (filledCompatible.length === 1) {
		const idx = filledCompatible[0];
		const currentId = lineup[idx];
		if (shouldConfirmSubstitute(currentId, playerId)) {
			requestSubstitute(idx, playerId);
		} else {
			selectPlayer(idx, playerId);
		}
		return;
	}

	if (filledCompatible.length > 0) {
		openModal(filledCompatible[0]);
	}
}

function renderModalPlayers() {
	const slot = formations[currentFormation][activeSlotIndex];
	const search = modalSearch.value.trim().toLowerCase();
	const allowedCategories = getAllowedCategoriesForSlot(slot.role);

	modalPlayers.innerHTML = '';

	const filtered = players.filter((p) => {
		if (!allowedCategories.includes(p.posicao)) return false;
		if (
			search &&
			!p.nome.toLowerCase().includes(search) &&
			!p.clube.toLowerCase().includes(search)
		) {
			return false;
		}
		return true;
	});

	if (filtered.length === 0) {
		const empty = document.createElement('p');
		empty.textContent = 'Nenhum jogador encontrado para esta posição.';
		empty.style.padding = '1rem';
		empty.style.color = '#64748b';
		modalPlayers.appendChild(empty);
		return;
	}

	filtered.forEach((player) => {
		const onField = isPlayerOnField(player.id);
		const item = document.createElement('div');
		item.className = `modal-player-item${onField ? ' disabled' : ''}`;
		item.appendChild(createPhotoElement(player, 'card-photo'));
		const info = document.createElement('div');
		info.className = 'card-info';
		info.innerHTML = `<div class="card-name">${player.nome}</div>`;
		item.appendChild(info);
		const pos = document.createElement('span');
		pos.className = 'card-position';
		pos.textContent = player.posicao;
		item.appendChild(pos);

		if (!onField) {
			item.addEventListener('click', () => {
				const currentId = lineup[activeSlotIndex];
				if (
					currentId != null &&
					currentId !== player.id &&
					shouldConfirmSubstitute(currentId, player.id)
				) {
					requestSubstitute(activeSlotIndex, player.id);
					return;
				}
				selectPlayer(activeSlotIndex, player.id);
			});
			bindPlayerNameTooltip(item, player);
		} else {
			item.title = 'Jogador já escalado';
		}

		modalPlayers.appendChild(item);
	});
}

function selectPlayer(slotIndex, playerId) {
	const prevSlot = getSlotIndexForPlayer(playerId);
	if (prevSlot !== -1 && prevSlot !== slotIndex) {
		lineup[prevSlot] = null;
	}

	lineup[slotIndex] = playerId;
	clearPickedPlayer();
	closeModal();
	saveTeam();
	renderFormation();
	renderBench();
}

const BENCH_GROUPS = [
	{ title: 'Goleiros', posicao: 'GOL' },
	{ title: 'Defensores', posicao: 'DEF' },
	{ title: 'Meias', posicao: 'MEI' },
	{ title: 'Atacantes', posicao: 'ATA' },
];

function renderBench() {
	if (isMobileView()) return;

	benchEl.innerHTML = '';

	BENCH_GROUPS.forEach((group) => {
		const groupPlayers = players.filter((p) => p.posicao === group.posicao);
		if (!groupPlayers.length) return;

		const section = document.createElement('div');
		section.className = 'bench-group';

		const title = document.createElement('h3');
		title.className = 'bench-group-title';
		title.textContent = group.title;
		section.appendChild(title);

		const cards = document.createElement('div');
		cards.className = 'bench-cards';

		groupPlayers.forEach((player) => {
			const onField = isPlayerOnField(player.id);
			const card = document.createElement('div');
			const isPicked = pickedPlayerId === player.id;
			card.className = `player-card${onField ? ' on-field' : ''}${isPicked ? ' picked' : ''}`;
			card.dataset.playerId = String(player.id);
			card.draggable = !onField && !isTouchUI;
			card.setAttribute('role', 'button');
			card.setAttribute('tabindex', onField ? '-1' : '0');

			card.appendChild(createPhotoElement(player, 'card-photo'));

			const info = document.createElement('div');
			info.className = 'card-info';
			info.innerHTML = `<div class="card-name">${player.nome}</div>`;
			card.appendChild(info);
			bindPlayerNameTooltip(card, player);

			if (!onField) {
				card.addEventListener('click', () => handleBenchPlayerClick(player.id));
				if (!isTouchUI) {
					card.addEventListener('dragstart', (e) => {
						draggedPlayerId = player.id;
						draggedFromSlot = null;
						e.dataTransfer.setData('text/plain', String(player.id));
						e.dataTransfer.effectAllowed = 'move';
					});
					card.addEventListener('dragend', () => {
						if (draggedFromSlot === null) draggedPlayerId = null;
					});
				}
			}

			cards.appendChild(card);
		});

		section.appendChild(cards);
		benchEl.appendChild(section);
	});
}

function dragPlayer(playerId, fromSlot, toSlot) {
	if (playerId === null || toSlot === null) return;

	const player = getPlayerById(playerId);
	const targetRole = formations[currentFormation][toSlot].role;
	if (!player || !isPlayerCompatible(player, targetRole)) return;

	const targetPlayerId = lineup[toSlot];

	if (fromSlot !== null) {
		if (fromSlot === toSlot) return;
		lineup[fromSlot] = targetPlayerId ?? null;
		lineup[toSlot] = playerId;
	} else {
		const existingSlot = getSlotIndexForPlayer(playerId);
		if (existingSlot !== -1) lineup[existingSlot] = null;
		if (targetPlayerId) {
			if (existingSlot !== -1) lineup[existingSlot] = targetPlayerId;
		}
		lineup[toSlot] = playerId;
	}

	saveTeam();
	renderFormation();
	renderBench();
}

function saveTeam() {
	const data = {
		formation: currentFormation,
		lineup: lineup,
	};
	try {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
	} catch {}
}

function loadTeam() {
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		if (!raw) return false;
		const data = JSON.parse(raw);
		if (data.formation && formations[data.formation]) {
			currentFormation = data.formation;
			formationSelect.value = currentFormation;
		}
		if (Array.isArray(data.lineup) && formations[currentFormation]) {
			const len = formations[currentFormation].length;
			lineup = data.lineup.slice(0, len);
			while (lineup.length < len) lineup.push(null);
		}
		return true;
	} catch {
		return false;
	}
}

function clearTeam() {
	clearPickedPlayer();
	lineup = formations[currentFormation].map(() => null);
	localStorage.removeItem(STORAGE_KEY);
	saveTeam();
	renderFormation();
	renderBench();
}

function openConfirmClear() {
	closeModal();
	confirmClearOverlay.classList.remove('hidden');
	document.body.classList.add('modal-open');
	confirmClearCancel.focus();
}

function closeConfirmClear() {
	confirmClearOverlay.classList.add('hidden');
	if (
		modalOverlay.classList.contains('hidden') &&
		confirmSubstituteOverlay.classList.contains('hidden')
	) {
		document.body.classList.remove('modal-open');
	}
}

function confirmClearTeam() {
	closeConfirmClear();
	clearTeam();
}

function initFormationSelect() {
	Object.keys(formations).forEach((key) => {
		const opt = document.createElement('option');
		opt.value = key;
		opt.textContent = key;
		formationSelect.appendChild(opt);
	});
	formationSelect.value = currentFormation;
	formationSelect.addEventListener('change', (e) => {
		changeFormation(e.target.value);
	});
}

function initBenchDropZone() {
	benchEl.addEventListener('dragover', (e) => {
		if (draggedFromSlot !== null) e.preventDefault();
	});
	benchEl.addEventListener('drop', (e) => {
		if (draggedFromSlot !== null && draggedPlayerId !== null) {
			e.preventDefault();
			lineup[draggedFromSlot] = null;
			draggedPlayerId = null;
			draggedFromSlot = null;
			saveTeam();
			renderFormation();
			renderBench();
		}
	});
}

function syncMobileClass() {
	document.body.classList.toggle('is-mobile', isMobileView());
}

function init() {
	syncMobileClass();
	initFormationSelect();
	initBenchDropZone();
	lineup = formations[currentFormation].map(() => null);
	loadTeam();
	renderFormation();
	renderBench();

	document.getElementById('modal-close').addEventListener('click', closeModal);
	modalRemoveBtn.addEventListener('click', removePlayerFromSlot);
	pickBannerCancel.addEventListener('click', clearPickedPlayer);
	modalOverlay.addEventListener('click', (e) => {
		if (e.target === modalOverlay) closeModal();
	});
	modalSearch.addEventListener('input', renderModalPlayers);
	btnDownload.addEventListener('click', downloadLineupPng);
	btnClear.addEventListener('click', openConfirmClear);
	confirmClearCancel.addEventListener('click', closeConfirmClear);
	confirmClearOk.addEventListener('click', confirmClearTeam);
	confirmClearOverlay.addEventListener('click', (e) => {
		if (e.target === confirmClearOverlay) closeConfirmClear();
	});
	confirmSubstituteCancel.addEventListener('click', closeConfirmSubstitute);
	confirmSubstituteOk.addEventListener('click', confirmSubstitutePlayer);
	confirmSubstituteOverlay.addEventListener('click', (e) => {
		if (e.target === confirmSubstituteOverlay) closeConfirmSubstitute();
	});

	document.addEventListener('keydown', (e) => {
		if (e.key !== 'Escape') return;
		if (!confirmSubstituteOverlay.classList.contains('hidden')) {
			closeConfirmSubstitute();
			return;
		}
		if (!confirmClearOverlay.classList.contains('hidden')) {
			closeConfirmClear();
			return;
		}
		if (!modalOverlay.classList.contains('hidden')) closeModal();
	});

	mobileMedia.addEventListener('change', () => {
		syncMobileClass();
		clearPickedPlayer();
		renderFormation();
		renderBench();
	});

	let resizeTimer;
	window.addEventListener('resize', () => {
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(() => {
			renderFormation();
		}, 120);
	});
}
