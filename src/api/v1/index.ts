import { Router } from 'express';
import { join } from 'path';
import { readdirSync } from 'fs';

export const router = Router();
const wallpapers = readdirSync('./assets/Wallpapers');

router.get('/wallpaper', (req, res) => {
    res.json({ url: join(req.hostname, `assets/Wallpapers/${wallpapers[Math.floor(Math.random() * wallpapers.length)]}`) });
});
