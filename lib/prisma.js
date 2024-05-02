import { PrismaClient } from '@prisma/client';
import { global } from 'styled-jsx/css';

let prisma;

if (process.env.NODE_ENV === 'production') {
	prisma = new PrismaClient();
} else {
	if (!globalThis.prisma) {
		global.prisma = new PrismaClient();
	}

	prisma = global.prisma;
}

export default prisma;
