/**
 * AgentMail API Client
 * Docs: https://docs.agentmail.to
 */

const AGENTMAIL_API_KEY = process.env.AGENTMAIL_API_KEY || '';
const BASE_URL = 'https://api.agentmail.to/v1';

export interface AgentMailConfig {
  apiKey?: string;
  inbox?: string;
}

export interface Message {
  id: string;
  from: string;
  to: string;
  subject: string;
  text: string;
  html?: string;
  created_at: string;
  read: boolean;
}

export interface Inbox {
  id: string;
  email: string;
  created_at: string;
}

export class AgentMailClient {
  private apiKey: string;
  private inbox: string;

  constructor(config: AgentMailConfig = {}) {
    this.apiKey = config.apiKey || AGENTMAIL_API_KEY;
    this.inbox = config.inbox || process.env.AGENTMAIL_INBOX || '';
  }

  /**
   * List all inboxes
   */
  async listInboxes(): Promise<Inbox[]> {
    const response = await this.request('/inboxes');
    return response.inboxes || [];
  }

  /**
   * Get a specific inbox
   */
  async getInbox(inboxId?: string): Promise<Inbox> {
    const id = inboxId || this.inbox;
    return this.request(`/inboxes/${id}`);
  }

  /**
   * List messages in an inbox
   */
  async listMessages(inboxId?: string): Promise<Message[]> {
    const id = inboxId || this.inbox;
    const response = await this.request(`/inboxes/${id}/messages`);
    return response.messages || [];
  }

  /**
   * Get a specific message
   */
  async getMessage(inboxId: string, messageId: string): Promise<Message> {
    return this.request(`/inboxes/${inboxId}/messages/${messageId}`);
  }

  /**
   * Send an email
   */
  async sendEmail(params: {
    inbox_id?: string;
    to: string;
    subject: string;
    text: string;
    html?: string;
  }): Promise<Message> {
    const inboxId = params.inbox_id || this.inbox;
    return this.request(`/inboxes/${inboxId}/messages/send`, {
      method: 'POST',
      body: JSON.stringify({
        to: params.to,
        subject: params.subject,
        text: params.text,
        html: params.html,
      }),
    });
  }

  /**
   * Mark a message as read
   */
  async markAsRead(inboxId: string, messageId: string): Promise<void> {
    await this.request(`/inboxes/${inboxId}/messages/${messageId}/read`, {
      method: 'POST',
    });
  }

  /**
   * Make API request
   */
  private async request(
    path: string,
    options: RequestInit = {}
  ): Promise<any> {
    const url = `${BASE_URL}${path}`;
    
    const response = await fetch(url, {
      ...options,
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`AgentMail API error: ${response.status} ${error}`);
    }

    return response.json();
  }
}

/**
 * Default client instance
 */
export const agentmail = new AgentMailClient();

/**
 * Send a quick email
 */
export async function sendEmail(
  to: string,
  subject: string,
  text: string,
  inboxId?: string
): Promise<Message> {
  return agentmail.sendEmail({
    inbox_id: inboxId,
    to,
    subject,
    text,
  });
}

/**
 * Check for new messages
 */
export async function getMessages(inboxId?: string): Promise<Message[]> {
  return agentmail.listMessages(inboxId);
}
