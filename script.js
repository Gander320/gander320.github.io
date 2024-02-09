// app.js
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const app = express();

// 미들웨어 설정
app.use(express.urlencoded({ extended: false }));
app.use(session({ secret: 'your-secret-key', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

// 사용자 데이터베이스
const users = [
    { id: 1, username: 'user1', password: 'password1', role: 'user' },
    { id: 2, username: 'user2', password: 'password2', role: 'admin' }
];

// 패스포트 설정
passport.use(new LocalStrategy((username, password, done) => {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        return done(null, user);
    }
    return done(null, false, { message: 'Incorrect username or password.' });
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    const user = users.find(u => u.id === id);
    done(null, user);
});

// 로그인 라우트
app.post('/login', passport.authenticate('local', { successRedirect: '/dashboard', failureRedirect: '/login' }));

// 로그인 페이지
app.get('/login', (req, res) => {
    res.send('<form action="/login" method="post"><input type="text" name="username" placeholder="Username"><input type="password" name="password" placeholder="Password"><button type="submit">Login</button></form>');
});

// 대시보드 페이지
app.get('/dashboard', (req, res) => {
    if (req.isAuthenticated()) {
        res.send('<h1>Welcome to the dashboard!</h1>');
    } else {
        res.redirect('/login');
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
