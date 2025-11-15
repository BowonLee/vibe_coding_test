# GitHub Pages 배포 가이드

## 1. 코드 푸시

터미널에서 다음 명령어를 실행하여 코드를 GitHub에 푸시하세요:

```bash
cd landing-page
git add .
git commit -m "Initial commit: RunMate landing page"
git push -u origin main
```

인증이 필요한 경우, GitHub Personal Access Token을 사용하거나 SSH 키를 설정하세요.

## 2. GitHub Pages 설정

1. GitHub 레포지토리 페이지로 이동: https://github.com/BowonLee/vibe_coding_test
2. **Settings** 탭 클릭
3. 왼쪽 메뉴에서 **Pages** 클릭
4. **Source** 섹션에서:
   - **Deploy from a branch** 선택
   - **Branch**: `main` 선택
   - **Folder**: `/ (root)` 선택
   - **Save** 클릭

## 3. GitHub Actions 권한 설정

1. **Settings** > **Actions** > **General** 이동
2. **Workflow permissions** 섹션에서:
   - **Read and write permissions** 선택
   - **Allow GitHub Actions to create and approve pull requests** 체크
   - **Save** 클릭

## 4. 자동 배포 확인

- `main` 브랜치에 푸시하면 자동으로 GitHub Actions가 실행됩니다
- **Actions** 탭에서 배포 진행 상황을 확인할 수 있습니다
- 배포가 완료되면 `https://bowonlee.github.io/vibe_coding_test/` 에서 사이트를 확인할 수 있습니다

## 5. 커스텀 도메인 (선택사항)

필요한 경우 **Settings** > **Pages**에서 커스텀 도메인을 설정할 수 있습니다.

## 문제 해결

### 배포가 실패하는 경우
1. **Actions** 탭에서 실패한 워크플로를 확인
2. 에러 로그를 확인하여 문제 파악
3. 필요시 `.github/workflows/deploy.yml` 파일을 수정

### Pages가 활성화되지 않는 경우
- 레포지토리가 Public인지 확인
- GitHub Pages 설정이 올바른지 확인
- Actions 권한이 올바르게 설정되었는지 확인

