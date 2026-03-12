"""
Setup configuration for OpenClaw Swarm Orchestrator backend
"""
from setuptools import setup, find_packages

with open("../README.md", "r", encoding="utf-8") as fh:
    long_description = fh.read()

setup(
    name="openclaw-swarm-orchestrator",
    version="0.1.0",
    author="OpenClaw Team",
    author_email="support@openclaw.ai",
    description="AI Agent cluster orchestration platform",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/ZhenRobotics/openclaw-swarm-orchestrator",
    project_urls={
        "Bug Tracker": "https://github.com/ZhenRobotics/openclaw-swarm-orchestrator/issues",
        "Documentation": "https://github.com/ZhenRobotics/openclaw-swarm-orchestrator/blob/main/README.md",
        "Source Code": "https://github.com/ZhenRobotics/openclaw-swarm-orchestrator",
    },
    packages=find_packages(),
    classifiers=[
        "Development Status :: 3 - Alpha",
        "Intended Audience :: Developers",
        "Topic :: Software Development :: Libraries :: Application Frameworks",
        "Topic :: Scientific/Engineering :: Artificial Intelligence",
        "License :: OSI Approved :: MIT License",
        "Programming Language :: Python :: 3",
        "Programming Language :: Python :: 3.11",
        "Programming Language :: Python :: 3.12",
        "Operating System :: OS Independent",
    ],
    python_requires=">=3.11",
    install_requires=[
        "fastapi>=0.109.0",
        "uvicorn[standard]>=0.27.0",
        "sqlalchemy>=2.0.25",
        "redis>=5.0.1",
        "pydantic>=2.5.3",
        "pydantic-settings>=2.1.0",
    ],
    extras_require={
        "dev": [
            "pytest>=7.4.4",
            "pytest-asyncio>=0.23.3",
            "black>=23.12.1",
            "flake8>=7.0.0",
            "mypy>=1.8.0",
        ],
        "ai": [
            "openai>=1.10.0",
            "anthropic>=0.8.1",
        ],
    },
    entry_points={
        "console_scripts": [
            "swarm-orchestrator=app.cli:main",
        ],
    },
)
