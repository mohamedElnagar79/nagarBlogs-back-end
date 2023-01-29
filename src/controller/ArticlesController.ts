import { AppDataSource } from '../data-source'
import { NextFunction, Request, Response } from "express"
import { Article } from "../entity/Article"
import { Like } from 'typeorm';

export class ArticlesController {
    private articleRepository = AppDataSource.getRepository(Article)

    async all(request: Request, response: Response, next: NextFunction) {
        const { title, body, author } = request.query;
        return this.articleRepository.find({
            where: {
                title: title ? Like(`%${title}%`) : undefined,
                body: body ? Like(`%${body}%`) : undefined,
                author: author ? Like(`%${author}%`) : undefined,
            }
        })
    }

    async one(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id);

        const article = await this.articleRepository.findOne({
            where: { id }
        })

        if (!article) {
            return "unregistered article"
        }
        return article
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const { title, body, author } = request.body;

        if (!title || !body || !author) {
            return response.status(400).send({ Message: 'Please fill all information' });
        }

        const article = Object.assign(new Article(), {
            title,
            body,
            author
        })

        return this.articleRepository.save(article)
    }

}