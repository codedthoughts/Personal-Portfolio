import { useState, useEffect } from "react";
import { Github } from "lucide-react";

interface GitHubStats {
  followers: number;
  following: number;
  public_repos: number;
  stars: number;
}

const GitHubStats = () => {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [repos, setRepos] = useState<any[]>([]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Fetch user data
        const userDataResponse = await fetch('https://api.github.com/users/codedthoughts');
        if (!userDataResponse.ok) throw new Error('Failed to fetch user data');
        const userData = await userDataResponse.json();

        // Fetch stars count
        const starredResponse = await fetch('https://api.github.com/users/codedthoughts/starred');
        if (!starredResponse.ok) throw new Error('Failed to fetch starred repos');
        const starredRepos = await starredResponse.json();

        // Fetch repositories
        const reposResponse = await fetch('https://api.github.com/users/codedthoughts/repos?sort=stars&per_page=5');
        if (!reposResponse.ok) throw new Error('Failed to fetch repositories');
        const repositories = await reposResponse.json();

        setRepos(repositories);
        setStats({
          followers: userData.followers,
          following: userData.following,
          public_repos: userData.public_repos,
          stars: starredRepos.length
        });
      } catch (err) {
        setError('Failed to fetch GitHub stats');
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center p-8">
        <div className="animate-spin w-8 h-8 border-2 border-white/30 border-t-white rounded-full"></div>
        <p className="mt-2 text-white/70">Loading GitHub stats...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-full p-4">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (!stats) {
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="flex items-center gap-2 mb-6">
        <Github className="w-8 h-8 text-white" />
        <h2 className="text-2xl font-semibold text-white">GitHub Stats</h2>
      </div>

      <div className="grid grid-cols-2 gap-6 w-full max-w-md mb-8">
        <div className="bg-white/10 p-4 rounded-lg text-center">
          <div className="text-3xl font-bold text-white">{stats.followers}</div>
          <p className="text-white/80">Followers</p>
        </div>
        <div className="bg-white/10 p-4 rounded-lg text-center">
          <div className="text-3xl font-bold text-white">{stats.following}</div>
          <p className="text-white/80">Following</p>
        </div>
        <div className="bg-white/10 p-4 rounded-lg text-center">
          <div className="text-3xl font-bold text-white">{stats.public_repos}</div>
          <p className="text-white/80">Repositories</p>
        </div>
        <div className="bg-white/10 p-4 rounded-lg text-center">
          <div className="text-3xl font-bold text-white">{stats.stars}</div>
          <p className="text-white/80">Stars</p>
        </div>
      </div>

      <div className="w-full">
        <h3 className="text-xl font-semibold text-white mb-4">Top Repositories</h3>
        <div className="space-y-4">
          {repos.map((repo: any) => (
            <div key={repo.id} className="bg-white/10 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-white font-medium">{repo.name}</h4>
                  <p className="text-white/80 text-sm">{repo.description}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1 text-white/80">
                    <span>⭐</span>
                    {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1 text-white/80">
                    <span>🍴</span>
                    {repo.forks_count}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full mt-8">
        <a 
          href="https://github.com/codedthoughts" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
        >
          <Github className="w-4 h-4" />
          Visit GitHub Profile
        </a>
      </div>
    </div>
  );
};

export default GitHubStats;
