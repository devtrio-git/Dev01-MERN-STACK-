import { postModel } from "../models/post.schema.js";

export default class Posts {
    static async create(req, res) {
        try {
            const { title, tags } = req.body;

            if (!title || !tags) {
                return res.status(400).json({ message: "All fields are required", status: "failed" });
            }

            const new_post = new postModel({ title, tags });
            await new_post.save();

            res.status(201).json({ message: "Post created successfully", status: "success", post: new_post });

        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Internal server error", status: "failed" });
        }
    }

    static async all(req, res) {
        try {
            const posts = await postModel.find();
            res.status(200).json({ message: "All posts send successfully", status: "success", posts });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Internal server error", status: "failed" });
        }
    }
    static async getById(req, res) {
        try {
            const { id } = req.params;
            if (!id) {
                return res.status(400).json({ message: "Missing post id", status: "failed" })
            }

            const post = await postModel.findById(id);
            if (!post) {
                return res.status(404).json({ message: "Post not found", status: "failed" })
            }

            res.status(200).json({ message: "All posts send successfully", status: "success", post });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Internal server error", status: "failed" });
        }
    }

    static async update(req, res) {
        try {
            const { id } = req.params;
            const { title, tags } = req.body;
            if (!id) {
                return res.status(400).json({ message: "Missing post id", status: "failed" })
            }

            const post = await postModel.findById(id);
            if (!post) {
                return res.status(404).json({ message: "Post not found", status: "failed" })
            }

            if (!title || !tags) {
                return res.status(400).json({ message: "All fields are required", status: "failed" });
            }
            post.title = title;
            post.tags = tags;

            await post.save();
            res.status(200).json({ message: "post update successfully", status: "success", post });

        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Internal server error", status: "failed" });
        }
    }
    static async updateOne(req, res) {
        try {
            const { id } = req.params;
            const { title, tags } = req.body;
            if (!id) {
                return res.status(400).json({ message: "Missing post id", status: "failed" })
            }

            const post = await postModel.findById(id);
            if (!post) {
                return res.status(404).json({ message: "Post not found", status: "failed" })
            }

            post.title = title || post.title;
            post.tags = tags || post.tags;

            await post.save();
            res.status(200).json({ message: "post update successfully", status: "success", post });

        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Internal server error", status: "failed" });
        }
    }
    static async remove(req, res) {
        try {
            const { id } = req.params;
            if (!id) {
                return res.status(400).json({ message: "Missing post id", status: "failed" })
            }

            const post = await postModel.findByIdAndDelete(id);
            if (!post) {
                return res.status(404).json({ message: "Post not found", status: "failed" })
            }

            res.status(200).json({ message: "post delete successfully", status: "success", post });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Internal server error", status: "failed" });
        }
    }



}