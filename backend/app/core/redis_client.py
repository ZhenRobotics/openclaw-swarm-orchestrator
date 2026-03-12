"""
Redis client for caching and message queue
"""
import redis.asyncio as aioredis
from app.core.config import settings


class RedisClient:
    """Redis client wrapper"""

    def __init__(self):
        self.redis = None

    async def connect(self):
        """Connect to Redis"""
        self.redis = await aioredis.from_url(
            settings.REDIS_URL,
            encoding="utf-8",
            decode_responses=True
        )

    async def disconnect(self):
        """Disconnect from Redis"""
        if self.redis:
            await self.redis.close()

    async def ping(self):
        """Ping Redis to check connection"""
        if self.redis:
            return await self.redis.ping()
        return False

    async def set(self, key: str, value: str, expire: int = None):
        """Set a key-value pair"""
        if expire:
            return await self.redis.setex(key, expire, value)
        return await self.redis.set(key, value)

    async def get(self, key: str):
        """Get value by key"""
        return await self.redis.get(key)

    async def delete(self, key: str):
        """Delete a key"""
        return await self.redis.delete(key)

    async def push_task(self, queue: str, task: str):
        """Push task to queue"""
        return await self.redis.lpush(queue, task)

    async def pop_task(self, queue: str, timeout: int = 0):
        """Pop task from queue (blocking)"""
        result = await self.redis.brpop(queue, timeout=timeout)
        if result:
            return result[1]
        return None


redis_client = RedisClient()
