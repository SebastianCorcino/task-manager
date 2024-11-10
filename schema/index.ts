import * as z from 'zod';

export const TaskSchema = z.object({
    id: z.number(),
    title: z.string().min(1, { message: "Please enter a title" }),
    description: z.string().min(1, { message: "Please enter a description" }),
});
