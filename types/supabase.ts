export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[]

export interface Database {
    public: {
        Tables: {
            sim_users: {
                Row: {
                    id: string
                    created_at: string
                    total_credits_spent: number
                }
                Insert: {
                    id?: string
                    created_at?: string
                    total_credits_spent?: number
                }
                Update: {
                    id?: string
                    created_at?: string
                    total_credits_spent?: number
                }
            }
            sim_bills: {
                Row: {
                    id: string
                    created_at: string
                    title: string
                    description: string
                    month: number
                    category: string
                }
                Insert: {
                    id?: string
                    created_at?: string
                    title: string
                    description: string
                    month: number
                    category: string
                }
                Update: {
                    id?: string
                    created_at?: string
                    title: string
                    description: string
                    month: number
                    category: string
                }
            }
            sim_votes: {
                Row: {
                    id: string
                    created_at: string
                    user_id: string
                    bill_id: string
                    credits: number
                    vote_count: number
                    direction: string
                }
                Insert: {
                    id?: string
                    created_at?: string
                    user_id: string
                    bill_id: string
                    credits: number
                    vote_count: number
                    direction: string
                }
                Update: {
                    id?: string
                    created_at?: string
                    user_id: string
                    bill_id: string
                    credits: number
                    vote_count: number
                    direction: string
                }
            }
        }
    }
}
