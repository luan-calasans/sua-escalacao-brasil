const EXPORT_W = 1080;
const EXPORT_H = 1180;
const EXPORT_HEADER = 88;
const EXPORT_HEADER_LINE_H = 6;
const EXPORT_HEADER_PAD = 18;
const EXPORT_FIELD_TOP = 12;
const EXPORT_FIELD_BOTTOM = 22;

const EXPORT_PHOTO = {
	r: 64,
	border: 5,
	gapX: 52,
	gapY: 40,
	initialsFont: '800 26px "Plus Jakarta Sans", sans-serif',
};

const EXPORT_LABEL = {
	nameFont: '700 18px "Plus Jakarta Sans", sans-serif',
	roleFont: '800 13px "Plus Jakarta Sans", sans-serif',
	nameLineHeight: 22,
	gapAfterPhoto: 10,
	gapNameRole: 8,
	nameMaxWidth: 148,
	roleHeight: 24,
	rolePadX: 10,
};

function getExportPhotoDiameter() {
	return EXPORT_PHOTO.r * 2;
}

function getExportMarkerExtraHeight() {
	return (
		EXPORT_LABEL.gapAfterPhoto +
		Math.max(EXPORT_LABEL.nameLineHeight, EXPORT_LABEL.roleHeight) +
		4
	);
}

function getExportMarkerHeight() {
	return getExportPhotoDiameter() + getExportMarkerExtraHeight();
}

function truncateExportText(ctx, text, maxWidth) {
	if (ctx.measureText(text).width <= maxWidth) return text;
	let truncated = text;
	while (
		truncated.length > 1 &&
		ctx.measureText(`${truncated}…`).width > maxWidth
	) {
		truncated = truncated.slice(0, -1);
	}
	return `${truncated}…`;
}

function measureExportMarker(ctx, player, role) {
	const photoD = getExportPhotoDiameter();
	const name = getPlayerDisplayName(player);

	ctx.font = EXPORT_LABEL.roleFont;
	const roleW = ctx.measureText(role).width + EXPORT_LABEL.rolePadX * 2;
	const roleH = EXPORT_LABEL.roleHeight;

	ctx.font = EXPORT_LABEL.nameFont;
	const nameW = ctx.measureText(name).width;
	const rowW = nameW + EXPORT_LABEL.gapNameRole + roleW;
	const totalW = Math.max(photoD, rowW);
	const metaRowH = Math.max(EXPORT_LABEL.nameLineHeight, roleH);
	const totalH = photoD + EXPORT_LABEL.gapAfterPhoto + metaRowH;

	return { totalH, totalW, name, nameW, roleW, roleH, rowW, metaRowH };
}

function drawRoundRect(ctx, x, y, w, h, r) {
	const radius = Math.min(r, w / 2, h / 2);
	ctx.beginPath();
	ctx.moveTo(x + radius, y);
	ctx.arcTo(x + w, y, x + w, y + h, radius);
	ctx.arcTo(x + w, y + h, x, y + h, radius);
	ctx.arcTo(x, y + h, x, y, radius);
	ctx.arcTo(x, y, x + w, y, radius);
	ctx.closePath();
}

function isLineupComplete() {
	const slots = formations[currentFormation];
	if (!slots || lineup.length !== slots.length) return false;
	return lineup.every((id) => id != null);
}

function updateDownloadButton() {
	if (!btnDownload) return;
	const complete = isLineupComplete();
	btnDownload.disabled = !complete;
	btnDownload.classList.toggle('btn-download--ready', complete);
	btnDownload.setAttribute('aria-disabled', complete ? 'false' : 'true');
}

function loadImageForExport(src) {
	return new Promise((resolve) => {
		const img = new Image();
		img.crossOrigin = 'anonymous';
		img.onload = () => resolve(img);
		img.onerror = () => resolve(null);
		img.src = src;
	});
}

function drawGrass(ctx, x, y, w, h) {
	const stripe = w / 12;
	for (let i = 0; i < 12; i++) {
		ctx.fillStyle = i % 2 === 0 ? '#1e7a38' : '#1a6b32';
		ctx.fillRect(x + i * stripe, y, stripe + 1, h);
	}
	const grd = ctx.createRadialGradient(
		x + w / 2,
		y + h / 2,
		0,
		x + w / 2,
		y + h / 2,
		h * 0.65,
	);
	grd.addColorStop(0, 'rgba(0,0,0,0)');
	grd.addColorStop(1, 'rgba(0,0,0,0.18)');
	ctx.fillStyle = grd;
	ctx.fillRect(x, y, w, h);
}

function drawPitchLines(ctx, x, y, w, h) {
	ctx.strokeStyle = 'rgba(255,255,255,0.92)';
	ctx.lineWidth = 3;

	const cx = x + w / 2;
	const penW = w * 0.58;
	const penH = h * 0.19;
	const goalW = w * 0.3;
	const goalH = h * 0.09;

	ctx.strokeRect(cx - penW / 2, y, penW, penH);
	ctx.strokeRect(cx - penW / 2, y + h - penH, penW, penH);
	ctx.strokeRect(cx - goalW / 2, y, goalW, goalH);
	ctx.strokeRect(cx - goalW / 2, y + h - goalH, goalW, goalH);

	ctx.strokeStyle = 'rgba(255, 255, 255, 0.38)';
	ctx.beginPath();
	ctx.moveTo(x, y + h / 2);
	ctx.lineTo(x + w, y + h / 2);
	ctx.stroke();

	ctx.strokeStyle = 'rgba(255, 255, 255, 0.92)';
	ctx.beginPath();
	ctx.arc(cx, y + h / 2, w * 0.12, 0, Math.PI * 2);
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(cx, y + h / 2, 4, 0, Math.PI * 2);
	ctx.fillStyle = 'rgba(255,255,255,0.95)';
	ctx.fill();
}

function drawExportHeader(ctx) {
	const grd = ctx.createLinearGradient(0, 0, EXPORT_W, 0);
	grd.addColorStop(0, '#009c3b');
	grd.addColorStop(0.5, '#ffdf00');
	grd.addColorStop(1, '#002776');
	ctx.fillStyle = grd;
	ctx.fillRect(0, 0, EXPORT_W, EXPORT_HEADER_LINE_H);

	const titleBaseline = EXPORT_HEADER_LINE_H + EXPORT_HEADER_PAD + 26;
	const formationBaseline = titleBaseline + 24;

	ctx.fillStyle = '#ffffff';
	ctx.font = '800 34px "Plus Jakarta Sans", sans-serif';
	ctx.textAlign = 'center';
	ctx.fillText('Seleção Brasileira', EXPORT_W / 2, titleBaseline);

	ctx.fillStyle = '#ffffff';
	ctx.font = '600 18px "Plus Jakarta Sans", sans-serif';
	ctx.fillText(`Formação ${currentFormation}`, EXPORT_W / 2, formationBaseline);
}

function computeExportPositions(slots, fieldX, fieldY, fieldW, fieldH) {
	const markerH = getExportMarkerHeight();
	const markerW = Math.max(getExportPhotoDiameter(), EXPORT_LABEL.nameMaxWidth);
	const { gapX, gapY } = EXPORT_PHOTO;
	const minStepY = markerH + gapY;
	const minStepX = markerW + gapX;
	const rowBand = markerH * 0.88;
	const anchorPadY = markerH / 2 + 8;
	const anchorPadX = markerW / 2 + 14;

	const top = fieldY + anchorPadY;
	const bottom = fieldY + fieldH - anchorPadY;
	const left = fieldX + anchorPadX;
	const right = fieldX + fieldW - anchorPadX;

	const items = slots.map((slot, index) => ({
		index,
		cx: fieldX + (slot.x / 100) * fieldW,
		cy: fieldY + (slot.y / 100) * fieldH,
	}));

	const clusterRowBands = () => {
		let bands = items.map((item) => [item]);
		let merged = true;
		while (merged) {
			merged = false;
			for (let i = 0; i < bands.length; i++) {
				for (let j = i + 1; j < bands.length; j++) {
					const sameRow = bands[i].some((a) =>
						bands[j].some((b) => Math.abs(a.cy - b.cy) < rowBand),
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
	};

	const spreadHorizontalRows = () => {
		const bands = clusterRowBands();

		bands.forEach((band) => {
			band.sort((a, b) => a.cx - b.cx);
			const n = band.length;
			const minSpan = (n - 1) * minStepX;
			const usable = right - left;

			if (minSpan <= usable) {
				const start = left + (usable - minSpan) / 2;
				band.forEach((item, i) => {
					item.cx = start + i * minStepX;
				});
			} else {
				const step = usable / (n - 1);
				band.forEach((item, i) => {
					item.cx = left + i * step;
				});
			}

			const avgCy = band.reduce((sum, it) => sum + it.cy, 0) / n;
			band.forEach((item) => {
				item.cy = avgCy;
			});
		});
	};

	const spaceColumns = () => {
		const colThreshold = markerW * 0.45;
		const columns = [];

		items.forEach((item) => {
			const col = columns.find(
				(group) => Math.abs(group[0].cx - item.cx) < colThreshold,
			);
			if (col) col.push(item);
			else columns.push([item]);
		});

		columns.forEach((group) => {
			if (group.length < 2) return;
			group.sort((a, b) => a.cy - b.cy);

			for (let i = 1; i < group.length; i++) {
				const minCy = group[i - 1].cy + minStepY;
				if (group[i].cy < minCy) group[i].cy = minCy;
			}

			const span = group[group.length - 1].cy - group[0].cy;
			const maxSpan = bottom - top;
			if (span > maxSpan) {
				const step = maxSpan / (group.length - 1);
				group[0].cy = top;
				for (let i = 1; i < group.length; i++) {
					group[i].cy = group[0].cy + step * i;
				}
			}

			if (group[group.length - 1].cy > bottom) {
				const shift = group[group.length - 1].cy - bottom;
				group.forEach((item) => {
					item.cy -= shift;
				});
			}
			if (group[0].cy < top) {
				const shift = top - group[0].cy;
				group.forEach((item) => {
					item.cy += shift;
				});
			}
		});
	};

	const resolveOverlaps = () => {
		const padX = gapX;
		const padY = gapY;

		for (let pass = 0; pass < 120; pass++) {
			let moved = false;
			for (let i = 0; i < items.length; i++) {
				for (let j = i + 1; j < items.length; j++) {
					const a = items[i];
					const b = items[j];
					const dx = Math.abs(a.cx - b.cx);
					const dy = Math.abs(a.cy - b.cy);
					const needX = markerW + padX;
					const needY = markerH + padY;
					if (dx >= needX || dy >= needY) continue;

					const pushX = (needX - dx) / 2 + 4;
					const pushY = (needY - dy) / 2 + 4;

					if (dy / needY < dx / needX) {
						if (a.cx <= b.cx) {
							a.cx -= pushX;
							b.cx += pushX;
						} else {
							a.cx += pushX;
							b.cx -= pushX;
						}
					} else if (a.cy <= b.cy) {
						a.cy -= pushY;
						b.cy += pushY;
					} else {
						a.cy += pushY;
						b.cy -= pushY;
					}
					moved = true;
				}
			}
			if (!moved) break;
		}
	};

	spreadHorizontalRows();
	spaceColumns();
	resolveOverlaps();
	spreadHorizontalRows();
	spaceColumns();

	items.forEach((item) => {
		item.cx = Math.max(left, Math.min(right, item.cx));
		item.cy = Math.max(top, Math.min(bottom, item.cy));
	});

	return items.map((item) => ({
		index: item.index,
		x: ((item.cx - fieldX) / fieldW) * 100,
		y: ((item.cy - fieldY) / fieldH) * 100,
	}));
}

function drawPlayerMarker(
	ctx,
	slot,
	player,
	img,
	fieldX,
	fieldY,
	fieldW,
	fieldH,
	xPercent,
	yPercent,
) {
	const { r: photoR, border: photoBorder, initialsFont } = EXPORT_PHOTO;
	const px = fieldX + (xPercent / 100) * fieldW;
	const py = fieldY + (yPercent / 100) * fieldH;
	const colors = AVATAR_COLORS[player.posicao] || AVATAR_COLORS.MEI;

	const role = slot.role;
	const { totalH, nameW, roleW, roleH, rowW, metaRowH } = measureExportMarker(
		ctx,
		player,
		role,
	);
	const displayName = getPlayerDisplayName(player);
	const topY = py - totalH / 2;
	const photoCy = topY + photoR;

	ctx.save();
	ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
	ctx.shadowBlur = 18;
	ctx.shadowOffsetY = 8;

	if (img) {
		ctx.beginPath();
		ctx.arc(px, photoCy, photoR, 0, Math.PI * 2);
		ctx.closePath();
		ctx.clip();
		ctx.drawImage(img, px - photoR, photoCy - photoR, photoR * 2, photoR * 2);
	} else {
		const g = ctx.createLinearGradient(
			px - photoR,
			photoCy - photoR,
			px + photoR,
			photoCy + photoR,
		);
		g.addColorStop(0, colors[0]);
		g.addColorStop(1, colors[1]);
		ctx.fillStyle = g;
		ctx.beginPath();
		ctx.arc(px, photoCy, photoR, 0, Math.PI * 2);
		ctx.fill();
		ctx.fillStyle = '#fff';
		ctx.font = initialsFont;
		ctx.textAlign = 'center';
		ctx.textBaseline = 'middle';
		ctx.fillText(getInitials(player.nome), px, photoCy + 2);
	}
	ctx.restore();

	ctx.strokeStyle = 'rgba(255, 255, 255, 0.95)';
	ctx.lineWidth = 4;
	ctx.beginPath();
	ctx.arc(px, photoCy, photoR, 0, Math.PI * 2);
	ctx.stroke();

	ctx.strokeStyle = '#ffdf00';
	ctx.lineWidth = photoBorder;
	ctx.beginPath();
	ctx.arc(px, photoCy, photoR, 0, Math.PI * 2);
	ctx.stroke();

	const metaTop = topY + photoR * 2 + EXPORT_LABEL.gapAfterPhoto;

	ctx.font = EXPORT_LABEL.nameFont;
	ctx.textAlign = 'left';
	ctx.textBaseline = 'top';
	ctx.fillStyle = '#ffffff';

	const maxNameW = Math.max(rowW - roleW - EXPORT_LABEL.gapNameRole, 40);
	const nameText = truncateExportText(ctx, displayName, maxNameW);
	const drawnNameW = ctx.measureText(nameText).width;
	const actualRowW = drawnNameW + EXPORT_LABEL.gapNameRole + roleW;
	const rowStartX = px - actualRowW / 2;

	ctx.save();
	ctx.shadowColor = 'rgba(0, 0, 0, 0.85)';
	ctx.shadowBlur = 6;
	ctx.shadowOffsetY = 1;
	ctx.fillText(nameText, rowStartX, metaTop);
	ctx.restore();

	ctx.font = EXPORT_LABEL.roleFont;
	const roleX = rowStartX + drawnNameW + EXPORT_LABEL.gapNameRole;
	const roleY = metaTop + (metaRowH - roleH) / 2;

	ctx.fillStyle = 'rgba(0, 39, 118, 0.92)';
	drawRoundRect(ctx, roleX, roleY, roleW, roleH, 5);
	ctx.fill();
	ctx.strokeStyle = 'rgba(255, 223, 0, 0.65)';
	ctx.lineWidth = 1.5;
	ctx.stroke();

	ctx.fillStyle = '#ffffff';
	ctx.textAlign = 'center';
	ctx.textBaseline = 'middle';
	ctx.fillText(role, roleX + roleW / 2, roleY + roleH / 2);
}

async function buildLineupCanvas() {
	const canvas = document.createElement('canvas');
	canvas.width = EXPORT_W;
	canvas.height = EXPORT_H;
	const ctx = canvas.getContext('2d');

	ctx.fillStyle = '#0a0f1a';
	ctx.fillRect(0, 0, EXPORT_W, EXPORT_H);

	drawExportHeader(ctx);

	const fieldX = 20;
	const fieldY = EXPORT_HEADER + EXPORT_FIELD_TOP;
	const fieldW = EXPORT_W - 40;
	const fieldH = EXPORT_H - fieldY - EXPORT_FIELD_BOTTOM;

	drawGrass(ctx, fieldX, fieldY, fieldW, fieldH);
	drawPitchLines(ctx, fieldX, fieldY, fieldW, fieldH);

	const slots = formations[currentFormation];
	const exportPositions = computeExportPositions(
		slots,
		fieldX,
		fieldY,
		fieldW,
		fieldH,
	);
	const sorted = [...exportPositions].sort((a, b) => a.y - b.y);

	const images = await Promise.all(
		sorted.map(({ index }) => {
			const player = getPlayerById(lineup[index]);
			return player?.foto
				? loadImageForExport(player.foto)
				: Promise.resolve(null);
		}),
	);

	sorted.forEach((pos, i) => {
		const player = getPlayerById(lineup[pos.index]);
		const slot = slots[pos.index];
		if (player) {
			drawPlayerMarker(
				ctx,
				slot,
				player,
				images[i],
				fieldX,
				fieldY,
				fieldW,
				fieldH,
				pos.x,
				pos.y,
			);
		}
	});

	return canvas;
}

async function downloadLineupPng() {
	if (!isLineupComplete()) return;

	btnDownload.disabled = true;
	const btnLabel = btnDownload.querySelector('.btn-label');
	const prevText = btnLabel?.textContent ?? btnDownload.textContent;
	if (btnLabel) btnLabel.textContent = 'Gerando…';
	else btnDownload.textContent = 'Gerando…';

	try {
		const canvas = await buildLineupCanvas();
		const blob = await new Promise((resolve) =>
			canvas.toBlob(resolve, 'image/png', 1),
		);

		if (!blob) throw new Error('Falha ao gerar imagem');

		const url = URL.createObjectURL(blob);
		const link = document.createElement('a');
		const date = new Date().toISOString().slice(0, 10);
		link.download = `selecao-brasileira-${currentFormation}-${date}.png`;
		link.href = url;
		link.click();
		URL.revokeObjectURL(url);
	} catch (err) {
		console.error(err);
		alert('Não foi possível gerar a imagem.');
	} finally {
		if (btnLabel) btnLabel.textContent = prevText;
		else btnDownload.textContent = prevText;
		updateDownloadButton();
	}
}

