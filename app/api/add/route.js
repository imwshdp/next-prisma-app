import { NextResponse } from 'next/server';
import prisma from '@lib/prisma';

export async function POST(request) {
	const { title, content } = await request.json();

	console.log('response', { title, content });

	const result = await prisma.post.create({
		data: {
			title,
			content,
			published: true,
			author: {
				create: {
					name: 'Guest'
				}
			}
		}
	});

	return NextResponse.json({
		result
	});
}
